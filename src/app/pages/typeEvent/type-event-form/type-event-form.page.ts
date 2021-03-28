import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { DialogService } from 'src/app/api/util/dialog.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-type-event-form',
  templateUrl: './type-event-form.page.html',
  styleUrls: ['./type-event-form.page.scss'],
})
export class TypeEventFormPage implements OnInit {


  public serviceTypeEvent : Model;
  public typeEvent : any;
  public id : any;

  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public viewCtrl: ModalController,
    navParams: NavParams,
  ) {
    this.serviceTypeEvent = new Model('TypeEvent',request);
    console.log('ver');
    this.id = navParams.get('id');
   }

  ngOnInit() {
    this.initObject();
  }

  initObject(){
    this.typeEvent = { 'name' :'', 'icon':''};

    if(this.id){
      this.serviceTypeEvent.api_find(this.id).subscribe(data => {
        if(data['status'] == 'success'){
          this.typeEvent = data['TypeEvent'];
        }
      })
    }
  }

  submit(){
    if(this.typeEvent.id){
      this.serviceTypeEvent.api_update(this.typeEvent).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['TypeEvent'])
        }
      });

    }else{
      this.serviceTypeEvent.api_create(this.typeEvent).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['TypeEvent'])
        }
    })
    }
  }

  dismiss(typeEvent) {
    this.viewCtrl.dismiss(
      {
        typeEvent : typeEvent,
      }
    );
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
