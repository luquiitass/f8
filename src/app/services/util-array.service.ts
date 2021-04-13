import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilArrayService {

  constructor() { }

  listAddLast(list,item){
    list.push(item);
  }

  listAddFirst(list,item){
    list.unshift(item);
  }

  listUpdate(list,id,item){
    let index = this.findIndexList(list,id);
    console.log('index remove' , index)
    if(index >= 0){
        list[index] = item ;
    }
  }

  listDelete(list,id){
    let index = this.findIndexList(list,id);
    console.log('index remove' , index)
    if(index >= 0)
        list.splice(index, 1);
  }

  findList(list, id){
    return list.find(item => item['id'] === id);
  }

  findIndexList(list,id){
    return list.findIndex(item => item['id'] === id);
  }
}
