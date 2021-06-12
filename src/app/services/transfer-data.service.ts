import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  public data : any = {};
  public callbaks : any  = {};

  constructor() { }

  setData(key, value){
    this.data[key] = value;
  }

  getData(key){
    if(this.data.hasOwnProperty(key))
      return this.data[key];
    return null;
  }

  clear(key = null){
    if(this.data.hasOwnProperty(key)){
      delete this.data[key];
      return;
    }

    this.data = {};
  }

  /**
   * Añade la funcion que se ejecutara al ejecutar setDataPage 
   * @param page Key de la pagina que deebra obtener los dato
   * @param callbak funcion que recibe un parametro
   */

  onSettDataPage(page , callbak){
    this.callbaks[page] = callbak
  }

  /**
   * Ejecuta la funcion que recibe el parametro ingresado en esta funcion
   * @param page pagina actual
   * @param parms parametros 
   */
  setDataPage(page,parms){
    if( this.callbaks.hasOwnProperty(page))
      this.callbaks[page](parms)
  }

}
