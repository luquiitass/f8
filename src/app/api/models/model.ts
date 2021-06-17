
import {RequestService} from '../request.service'
import {Errors} from './errors';

export class Model {

    private model;
    public errorsForm : Errors = new Errors(); 
    public list =[];

    constructor(
        model,
        public request : RequestService) {
        this.model = model;
    }

    api_find(id: string) {
        return this.request.api_find(this.model,id);
    }

    api_loadAttribute(id: string,attribute : string) {
        return this.request.api_loadAttribute(this.model,id,attribute);
    }

    api_all(event = null) {
        this.request.api_all(this.model,event).subscribe(data => {
        console.log(data);
        if(data['status'] == 'success'){
        this.list = data['all'];
        }
        if(event)
        event.target.complete();
        
    },error=>{
        if(event)
        event.target.complete();
    });
    }

    api_create(item) {
        this.errorsForm = this.request.errorsForm;
        return this.request.api_create(this.model,item);
    }

    api_update(item) {
        this.errorsForm = this.request.errorsForm;
        return this.request.api_update(this.model,item);
    }

    /**
     * Elimina el objeto de la base de datos 
     * @param id Id del elemento a eliminar
     * @return Devuelve el mismo objeto y el estado del proceso 
     */
    api_delete(id: string) {
        this.errorsForm = this.request.errorsForm;
        return this.request.api_delete(this.model,id);
    
    }

    api_function(functionName,parms = {}){
        return this.request.api_function(this.model,functionName,parms);
    }

    api_functionModel(id,functionName,parms = {}){
        return this.request.api_functionModel(this.model,id,functionName,parms);
    }


    listAddLast(item){
        this.list.push(item);
    }

    listAddFirst(item){
    this.list.unshift(item);
    }

    listUpdate(id,item){
    let index = this.findIndexList(id);
    console.log('index remove' , index)
    if(index >= 0){
        this.list[index] = item ;
    }
    }

    listDelete(id){
    let index = this.findIndexList(id);
    console.log('index remove' , index)
    if(index >= 0)
        this.list.splice(index, 1);
    }

    findList(id){
    return this.list.find(item => item['id'] === id);
    }

    findIndexList(id){
    return this.list.findIndex(item => item['id'] === id);
    }
    

}

