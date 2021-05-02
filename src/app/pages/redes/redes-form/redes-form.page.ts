import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/api/request.service';
import { Model } from 'src/app/api/models/model';
import { NavParams, ModalController } from '@ionic/angular';
import { DialogService } from 'src/app/api/util/dialog.service';

@Component({
  selector: 'app-redes-form',
  templateUrl: './redes-form.page.html',
  styleUrls: ['./redes-form.page.scss'],
})
export class RedesFormPage implements OnInit {

  public redes = ['Facebook','Instagram','WhatsApp','Twitter']
  public red : any;
  public redModel : Model;
  public id : any;
  public nameModel : any;
  public idModel : any;



  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public viewCtrl: ModalController,
    public navParams: NavParams,
  ) {

    this.redModel = new Model('Red',request);
    this.id = navParams.get('id');
    this.idModel = navParams.get('idModel');
    this.nameModel = navParams.get('nameModel');


   }

  ngOnInit() {
    this.init()
  }

  init(){
    this.red = {
      name : '',
      url : '',
      name_model : this.nameModel,
      model_id : this.idModel
    }

    if(this.id){
      this.redModel.api_find(this.id).subscribe(
        response => {
          this.red = response['Red'];
        }
      )
    }
  }

  submit(){

    this.saveRed()
  }

  dismiss(red) {
    this.viewCtrl.dismiss(
      {
        red : red,
      }
    );
  }

  close(){
    this.viewCtrl.dismiss();
  }


  saveRed(){
    if(this.red.id){
      this.redModel.api_update(this.red).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['Red'])
        }
      });

    }else{
      this.redModel.api_create(this.red).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['Red'])
        }
    })
    }
  }

}
