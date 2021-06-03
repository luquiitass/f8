import { Component, OnInit } from '@angular/core';

import {RequestService} from '../../../api/request.service';
import { ModalController, NavParams } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { Model } from 'src/app/api/models/model';
import { DialogService } from 'src/app/api/util/dialog.service';
import { ModelImage } from 'src/app/api/models/modelImage';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {

  public photoService : ModelImage;
  public serviceUser : Model;
  public user : any;
  public id : any;

  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public viewCtrl: ModalController,
    navParams: NavParams,
  ) {
    this.serviceUser = new Model('User',request);
    this.photoService = new ModelImage(request,viewCtrl);
    this.photoService.init('images/users/profile/',true,'assets/images/profile.jpg');
    this.id = navParams.get('id') ;

   }

  ngOnInit() {
    this.initObject()
  }

  initObject(){
    this.user = { 
      first_name : '' ,
      last_name : '',
      email : '',
      password : '' ,
      confirm_password : '',
      role : 'user'
    };

    if(this.id){
      this.serviceUser.api_find(this.id).subscribe(data => {
        if(data['status'] == 'success'){
          this.user = data['User'];
          this.photoService.setImage(this.user.photo);
          console.log(this.photoService.photo.getPath());
        }
      })
    }
  }

  submit(){

    if(this.photoService.isLoadPthoto){
      this.user.photo = this.photoService.photo;
    }
    
    if(this.user.id){
      this.serviceUser.api_update(this.user).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['User'])
        }
      });

    }else{
      this.serviceUser.api_create(this.user).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['User'])
        }
    })
    }
  }

  dismiss(user) {
    this.viewCtrl.dismiss(
      {
        user : user,
      }
    );
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
