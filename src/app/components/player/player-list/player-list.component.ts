import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {

  
  
  @Input('items') items ; 
  @Input('loading') loading = false;
  @Input('errorLoad') errorLoading;
  
  @Output() eventLoad = new EventEmitter<any>()
  @Output() eventSelect = new EventEmitter<any>()

  

  constructor() { 
    this.items = this.items ?? []
  }

  ngOnInit() {
    //this.items = 
    console.log('items comp' , this.items )
  }

  load(event){
    console.log('emit comp')
    if(this.eventLoad)
      this.eventLoad.emit(event);
  }

  selectItem(item){
    if(this.eventSelect)
      this.eventSelect.emit(item)
  }



  //Otras funciones 
  getPhoto(item){
    return item['photo'] ? item['photo']['urlComplete'] : 'assets/images/jugador.png'
  }

  

}
