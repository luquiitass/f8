import { Component, OnInit } from '@angular/core';

import {RequestService} from '../../../api/request.service';
import { ModalController, NavParams } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { Model } from 'src/app/api/models/model';
import { DialogService } from 'src/app/api/util/dialog.service';
import { ModelImage } from 'src/app/api/models/modelImage';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.page.html',
  styleUrls: ['./player-form.page.scss'],
})
export class PlayerFormPage implements OnInit {

  public servicePlayer : Model;
  public servicePosition : Model;
  public player : any;
  public id : any;
  public team_id : any;
  public photoModel : ModelImage;

  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public viewCtrl: ModalController,
    navParams: NavParams,
  ) {
    this.servicePosition = new Model('Position',request);
    this.servicePlayer = new Model('Player',request);
    console.log('ver');
    this.id = navParams.get('id');
    this.team_id = navParams.get('team_id');

    this.photoModel = new ModelImage(request,viewCtrl);
    this.photoModel.setAspectRatioCrop('1 / 1');
    this.photoModel.init('images/players/profile/',true,'assets/images/jugador.png');


   }

  ngOnInit() {
    this.initObject();
    this.servicePosition.api_all();
  }

  initObject(){
    this.player = {
       'name' :'',
        'nick':'',
        'birth_date':'',
        'number':1,
        'height':0.0,
        'weight' :0.0,
        'position_id':'',
        'team_id' : this.team_id,
        'photo_id' : ''
      };

    if(this.id){
      this.servicePlayer.api_find(this.id).subscribe(data => {
        if(data['status'] == 'success'){
          this.player = data['Player'];
          this.photoModel.setImage( this.player.photo)
        }
      })
    }
  }

  submit(){

    if(this.photoModel.isLoadPthoto()){
      this.savePhoto();
      return;
    }

    this.savePlayer()
  }

  dismiss(player) {
    this.viewCtrl.dismiss(
      {
        player : player,
      }
    );
  }

  close(){
    this.viewCtrl.dismiss();
  }

  async savePhoto(){

    await this.photoModel.uploadImage().subscribe( 
      data => {
        if(data['status'] == 'success'){
          let image = data['Image'];
          this.player.photo_id = image.id;
          this.savePlayer()
        }
      },
      error => {
        this.dialogService.showToast('Error al subir Portada','Error','danger');
        //this.submit();
      })

  }

  savePlayer(){
    if(this.player.id){
      this.servicePlayer.api_update(this.player).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['Player'])
        }
      });

    }else{
      this.servicePlayer.api_create(this.player).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['Player'])
        }
    })
    }
  }

}
