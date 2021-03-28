import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  Router
} from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


    loaderToShow: any;
    isLoading : boolean = false;

  constructor(private router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    console.log(token);

    if(request.url.includes('api/login')){
      return next.handle(request);
    }

    if (token) {
      request = request.clone({
       params : new HttpParams().append('api_token',token)
      });
      
     //request.params.append('token_api',token);
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (error.error.success === false) {
            //this.presentToast('Login failed');
          } else {
            this.router.navigate(['login']);
          }
        }
        return throwError(error);
      }));
   
     if (!request.headers.has('Content-Type')) {
        request = request.clone({
          setHeaders: {
            'content-type': 'application/json'
          }
        });
      }
  
      request = request.clone({
        headers: request.headers.set('Accept', 'application/json')
      });

     //this.showLoader();
      
        return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse ) {
                if(event.url.includes('api')){
                    
                }
            }
            //this.hideLoader();
            return event;
        }),
        catchError((error: HttpErrorResponse) => {
            console.error(error);
            //this.hideLoader();
            return throwError(error);
        }));
  }

  showLoader() {
      console.log('show loading')
    this.loaderToShow = this.loadingController.create({
      message: 'Cargando..'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    //this.hideLoader();
  }

  hideLoader() {
    console.log('hide loading')
    this.loadingController.dismiss();
     
  }

}