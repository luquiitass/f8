import { Component, OnInit } from '@angular/core';

import {RequestService} from '../../../api/request.service';
import { ModalController, NavParams } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { Model } from 'src/app/api/models/model';
import { DialogService } from 'src/app/api/util/dialog.service';

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.page.html',
  styleUrls: ['./position-form.page.scss'],
})
export class PositionFormPage implements OnInit {

  public servicePosition : Model;
  public posicion : any;
  public id : any;

  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public viewCtrl: ModalController,
    public photoService : PhotoService,
    navParams: NavParams,
  ) {
    this.servicePosition = new Model('Position',request);
    this.id = navParams.get('id') ;

   }

  ngOnInit() {
    this.initObject()
  }

  initObject(){
    this.posicion = { name : ''};

    if(this.id){
      this.servicePosition.api_find(this.id).subscribe(data => {
        if(data['status'] == 'success'){
          this.posicion = data['Position'];
        }
      })
    }
  }

  submit(){
    if(this.posicion.id){
      this.servicePosition.api_update(this.posicion).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['Position'])
        }
      });

    }else{
      this.servicePosition.api_create(this.posicion).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['Position'])
        }
    })
    }
  }

  dismiss(posicion) {
    this.viewCtrl.dismiss(
      {
        posicion : posicion,
      }
    );
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
