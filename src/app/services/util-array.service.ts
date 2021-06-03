import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilArrayService {

  constructor() { }

  /**
   * Inserta el elemento al final del array
   * @param list array en el que se inserta el objeto
   * @param item item a insertar
   */

  listAddLast(list,item){
    list.push(item);
  }

  /**
   * Añade un elemente en el array al inicio
   * @param list array en la que se inserta el objeto
   * @param item  elemento que se almacenara en el array
   */
  listAddFirst(list,item){
    list.unshift(item);
  }

  /**
   * Remplaza un objeto del array
   * @param list array que se actualizara
   * @param id iel id del objeto
   * @param item elemento que se remplazara en el array
   */
  listUpdate(list,id,item){
    let index = this.findIndexList(list,id);
    console.log('index remove' , index)
    if(index >= 0){
        list[index] = item ;
    }
  }

  /**
   * elimina objeto de un array pasando el id del objeto
   * @param list array del que se eliminara el objeto
   * @param id id del objeto
   */
  listDelete(list,id){
    let index = this.findIndexList(list,id);
    console.log('index remove' , index)
    if(index >= 0)
        list.splice(index, 1);
  }

  /**
   * Busca un obeto en el array
   * @param list array en el qie se bucara el objeto
   * @param id id del objeto
   */
  findList(list, id){
    return list.find(item => item['id'] === id);
  }

  /**
   * Retorna el indice de la posicion en la que se encuentra el objeto
   * @param list Array en el que se realizara a busqueda
   * @param id id del objeto buscado
   */
  findIndexList(list,id){
    return list.findIndex(item => item['id'] === id);
  }
}
