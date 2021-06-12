import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {



  constructor(
  ) { 
  }


  setFormatDate(date){
    return moment(date).locale("es").calendar() +" " + moment(date).format('LT');;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  formatHours(hours){
    let time = hours.split(':');

    return `${time[0]}:${time[1]}`;
  }

  setFormatMoment(val,format = 'DD-MMMM-YYYY'){
    return moment(val).locale('es').format(format);
  }

  getFormarHumans(val){
    return moment(val).locale('es').fromNow()
  }
}
