import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import {Errors} from '../api/models/errors';
import { throwError, from } from 'rxjs';
import { ToastController } from '@ionic/angular';
import {environment} from 'src/environments/environment';
import {Model} from './models/model';




@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private api = environment.server_url
  public errorsForm : Errors = new Errors(); 
  public errormodel : Model;
  

  constructor(
    private http: HttpClient,
    public toastCtr : ToastController,
  ) {
    this.errormodel = new Model('Error',this);
   }



  api_find(model,id: string) {
    console.log(`api_find model ${model}` , id)
    const path = `${this.api}/model/${model}/${id}`;
    return this.http.get(path);
  }

  api_loadAttribute(model,id: string,attribute : string) {
    console.log(`api_loadAttibute model ${model}` , id)
    const path = `${this.api}/reloadAttribute/${model}/${id}/${attribute}`;
    return this.http.get(path);
  }
  

  api_all(model,event = null) {
    console.log(`api_all model ${model}`)
    const path =  `${this.api}/collection/${model}`;
    return this.http.get(path).pipe(
      retry(2),
      catchError((err)=> this.handleError(err,model))
    )
  }

  api_create(model,item) {
    console.log(`api_create model ${model}` , item)
    const path = `${this.api}/methods/${model}/create`;
    return this.http.post(path, item)
    .pipe(
      retry(0),
      catchError((err)=>{ return this.handleError(err,model) } )
    )
  }

  api_update(model,item) {
    console.log(`api_update model ${model}` , item)
    const path = `${this.api}/methods/${model}/update`;
    return this.http.put(path, item)
    .pipe(
      retry(2),
      catchError((err)=>this.handleError(err,model))
    );
  }

  api_delete(model,id: string) {
    console.log(`api_delete model ${model} id:` , id)
    const path = `${this.api}/methods/${model}/delete`;
    return this.http.post(path,{'id': id })
    .pipe(
      retry(2),
      catchError((err)=>this.handleError(err,model))
    );
  }

  api_function(model, functionName,parms = {}){
    console.log(`api_function model ${model} function:` , functionName )
    const path = `${this.api}/runFunction/${model}/${functionName}`;
    return this.http.post(path,parms)
    .pipe(
      retry(2),
      catchError((err)=>this.handleError(err,model))
    );
  }

  api_functionModel(model,id, functionName,parms = {}){
    console.log(`api_functionModel model ${model} function:` , functionName )
    const path = `${this.api}/runFunctionModel/${model}/${id}/${functionName}`;
    return this.http.post(path,parms)
    .pipe(
      retry(2),
      catchError((err)=>this.handleError(err,model))
    );
  }

  

  handleError(error: HttpErrorResponse,model = null) {
    if(error.error && error.error.message)
      this.showToast(error.error.message,'danger');
      
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
     if(error.status == 402  ){
       this.errorsForm.record(JSON.parse( error.error.errorValidaciones ));
     }
     else if(error.status == 403  ) {
        this.saveErrorApi(error.status,error.error.mensaje,model);
        this.showToast(error.error.mensaje,'danger',7000,'Error Server');
     }else{
      this.saveErrorApi(error.status,error.message,model);
      console.error(`Backend returned code `,error.status , `body was:`, error.message);
      this.showToast('Error de conexión con el  servidor.','danger')
     }
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };


  async showToast(msj,color = 'primary',duration=3000 , header = undefined) {
    const toast = await this.toastCtr.create({
      header : header, 
      color :color,
      message: msj,
      duration: duration
    });
    toast.present();
  }

  saveErrorApi(status,message,model){
    if(model != 'Error'){
      this.errormodel.api_create({
        status : status,
        text : message,
        model : model
        }).subscribe(
          response => {
            console.log('save Error in APi',response);
          }
        );
  }
  }
}
