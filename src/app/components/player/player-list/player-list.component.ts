import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {

  
  
  @Input('items') items ; 
  @Input('loading') loading = false;
  @Input('errorLoad') errorLoading;
  @Input('firstLoading') firstLoading;
  
  @Output() eventLoad = new EventEmitter<any>()
  @Output() eventSelect = new EventEmitter<any>()

  public listSkeleton = new Array(5);

  

  constructor(
    public photoViewer : PhotoViewer
  ) { 
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
    return item['photo'] ? this.getPhotoServer(item['photo']) : 'assets/images/jugador.png'
  }

  getPhotoOr(item){
    return item['photo'] ? item['photo'].urlComplete : 'assets/images/jugador.png'
  }

  getPhotoServer(photo){
    return photo['thumb'] ? photo['urlCompleteThumb'] :  photo['urlCompleteThumb'] ;
  }

  showPhoto(image){
    this.photoViewer.show(image.urlComplete);
  }
  
  ngOnChanges(changes: SimpleChanges) {
        
    console.log('changes')
  
    
  }

}
