import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { ModalController, NavController } from '@ionic/angular';
import { ListRedirectPage } from '../../util/list-redirect/list-redirect.page';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public id : string = '0';
  public teamModel : Model;
  public team :any = null;
  public isAdmin = false;

  playersList : any = [];
  playersLoading = true;
  playersErrorLoad = false;

  constructor(
    public route : ActivatedRoute,
    public requesService : RequestService,
    public modalController : ModalController,
    public navCtrl : NavController,
    public authUser : AuthUserService

  ) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.teamModel = new Model('Team',requesService);

   }

  ngOnInit() {
    this.init()
  }

  init($events = null){
    /*
    this.teamModel.api_find(this.id).subscribe(data => {
      if(data['status'] == 'success')
        this.team = data['Team'];
    })*/
    this.playersLoading = true;
    this.teamModel.api_functionModel(this.id,'pageProfile').subscribe(
      response => {
        console.log(response);
        if(response['status'] == 'success'){
          this.team = response['data'];
          this.playersList = this.team.players;
        }
        this.playersLoading = false;
        this.loadPermissions();
        if($events)
          $events.target.complete();
      },
      error => {
        this.playersLoading = false;
        this.playersErrorLoad = false;
        console.error(error)
        if($events)
          $events.target.complete();
      }
    )

    //this.loadPlayers()
  }

  loadPermissions(){
    this.isAdmin = this.authUser.isAdminTeam(this.id);
  }

  getCover(){
    return this.team.cover_page ? this.team.cover_page.urlComplete : 'assets/images/cover.jpg' ; 
  }

  getShield(){
    return this.team.shield ? this.team.shield.urlComplete : 'assets/images/shield_team.png';
  }

  async showMenu(){
    let list = [
      {
        name : 'Editar Equipo',
        route : ''
      },
      {
        name : 'Admi. Jugadores',
        route : `team/${this.id}/players`
      },
      {
        name : 'Admi. Partidos',
        rote : ''
      }
    ];
    const modal = await this.modalController.create({
      component: ListRedirectPage ,
      componentProps: { 
        title : 'Administrar',
        list: list }
    });

    modal.onDidDismiss().then(data=>{
      console.log(data);
      
    })

    return await modal.present();
   }

   setLog(num){
     console.log('set log in page profile, num : ' , num)
   }

   loadPlayers(event){
     this.playersLoading = true;
      this.teamModel.api_loadAttribute(this.id,'players').subscribe(
        response => {

          if(response['status'] == 'success'){
            this.playersList = response['Team']['players'];
          }
          this.playersLoading = false
        },
        error => {
          this.playersLoading = false
          this.playersErrorLoad = true;
        }
      )
   }

   playerSelect(player){
      console.log('goTo',player)
      this.navCtrl.navigateForward(`player/profile/${player.id}`);
    
   }

   

}
