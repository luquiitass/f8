import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
  ) { }


  setFormatDate(date){
    return moment(date).lang("es").calendar() +" " + moment(date).format('LT');;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
