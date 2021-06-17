import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { PlayerFormPage } from '../player-form/player-form.page';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public id : any;
  public platerModel : Model;
  public player : any;
  public isAdmin = false;


  constructor(
    public request : RequestService,
    public route : ActivatedRoute,
    public authUser : AuthUserService,
    public modalController: ModalController,

  ) { 
    this.platerModel = new Model('Player',request)
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.init()
  }

  init($event = null){
    this.platerModel.api_functionModel(this.id,'profile').subscribe(
      response => {
        if(response['status'] == 'success'){
          this.player = response['data']
          this.isAdmin = this.player.user_id == this.authUser.user.id;
          console.log('player',this.player)
        }
        if($event)
          $event.target.complete();
      },
      error => {
        if($event)
          $event.target.complete();
      }
    )
  }
  getPhoto(){
    if(this.player && this.player.photo)
      return this.player.photo.urlComplete;
    return 'assets/images/jugador.png' 
  }

  getYears(date){
    return moment().diff(date, 'years')
  }


  async showEdit(player){
    const modal = await this.modalController.create({
      component: PlayerFormPage ,
      componentProps: { 
        id: player.id,
        isUser : true
      }
    });

    modal.onDidDismiss().then(data=>{
      console.log('dismiss edit')
      if(data.data && data.data.hasOwnProperty('player')){
        if(data.data && data.data['player'] ){
          const player = data.data['player'];
          this.player = player;
        }
        //this.playerService.listUpdate(player.id,player);
      }
    })

    return await modal.present();
   }

}
