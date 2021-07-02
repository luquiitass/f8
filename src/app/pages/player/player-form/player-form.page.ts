import { Component, OnInit } from '@angular/core';

import {RequestService} from '../../../api/request.service';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { Model } from 'src/app/api/models/model';
import { DialogService } from 'src/app/api/util/dialog.service';
import { ModelImage } from 'src/app/api/models/modelImage';
import { SearchPage } from '../../search/search.page';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { Router } from '@angular/router';

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
  public isUser = false;
  public canEditUser = true;

  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public viewCtrl: ModalController,
    navParams: NavParams,
    public modalController: ModalController,
    public authUser : AuthUserService,
    public alertController: AlertController,
    public router : Router

  ) {
    this.servicePosition = new Model('Position',request);
    this.servicePlayer = new Model('Player',request);
    console.log('ver');
    this.id = navParams.get('id');
    this.team_id = navParams.get('team_id');
    this.isUser = navParams.get('isUser');


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
          if(this.player.photo)
            this.photoModel.setImage( this.player.photo)

          this.canEditUser = (this.player && !this.player.user_id);
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

  async selectUser(){
    //e.preventDefault();
    console.log('Add admins');

    const modal = await this.modalController.create({
      component: SearchPage ,
      componentProps: { 
        cancellable: false,
        model : 'User',
        function : 'searchUser',
        multiple : false
      }
    });

    modal.onDidDismiss().then(data=>{
      const user = data.data ?  data.data['item'] : null;
      if(user){
        if(!user.player){
          this.player.user_id =  user.id;
          this.player.email = user.text
        }else{
          this.userWithPlayer(user);
        }
      }
     
    })

    return await modal.present();
  }

  async userWithPlayer(user){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      message: `<b>${user.text}</b> ya tiene asociado un jugador. Puedes enviarle una solicitud para que se incorpore a este equipo.`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Solicitar',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigateByUrl(`team-request/${this.team_id}/${user.player.id}`);
            this.close();
          }
        }
      ]
    });

    await alert.present();
  }


  get isAutor(){
    return this.player && this.authUser.user.id == this.player.user_id;
  }

  get isAdminGeneral(){
    return this.authUser.isAdmin;
  }

  get userSelect(){
    return this.player.user_id ? (this.player.user ? this.player.user.email : this.player.email) : '';
  }

}
