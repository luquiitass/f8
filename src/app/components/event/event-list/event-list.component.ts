import { Component, OnInit, Input } from '@angular/core';
import { IonItem, ModalController } from '@ionic/angular';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { DialogService } from 'src/app/api/util/dialog.service';
import { EventFormPage } from 'src/app/pages/event/event-form/event-form.page';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})



export class EventListComponent implements OnInit {

  @Input('game_id') game_id ; 
  @Input('isAdmin') isAdmin ; 

  gameModel : Model;
  eventModel : Model;
  events : any = [];
  team_l : any;
  team_v : any;
  team_admin : null;
  canEdit = false;
  //isAdmin = false;
  



  constructor(
    public requestService : RequestService,
    public dialog : DialogService,
    public modalController: ModalController,
    public authUser : AuthUserService


  ) { 
    this.gameModel = new Model('Game', requestService);
    this.eventModel = new Model('Event', requestService);

    console.log(this.game_id);
  }

  ngOnInit() {
    this.init();
  }

  init(){
      this.gameModel.api_functionModel(this.game_id,'dataEvent').subscribe(
        response => {
          if(response['status'] == 'success'){
            this.events = response['data']['events'];
            this.team_l = response['data']['team_l'];
            this.team_v = response['data']['team_v'];
            this.verificationAdmin();
          }
          console.log(this.events);
        }
      )
    
  }

  verificationAdmin(){
    console.log('verificationAdmin');
    if(this.authUser.isAdminTeam(this.team_l.id) || this.authUser.isAdminTeam(this.team_v.id) ){
      this.isAdmin = true;

      if(this.authUser.isAdminTeam(this.team_l.id))
        this.team_admin = this.team_l

      if(this.authUser.isAdminTeam(this.team_v.id))
        this.team_admin = this.team_v;
    }else{
      this.team_admin = null;
    }

    //if(this.authUser.isAdminTeam(this.team_l.id) && this.authUser.isAdminTeam(this.team_v.id) )
      
  }

  confirmDelete(event,index){
    this.dialog.presentAlertConfirm('Confirmar','Estas seguro de eliminar este Suceso',e => {
      this.delete(event,index)
    });
   }

   delete(event,index){
    this.eventModel.api_delete(event.id).subscribe(data => {
      console.log(data);
      if(data['status'] == 'success'){
        this.dialog.showToast('Suceso Eliminado',null,'success');
        this.events.splice(index,1);

      }
    });
  }

  async addEvent() {
    const modal = await this.modalController.create({
      component: EventFormPage ,
      componentProps: { 
        game_id: this.game_id,
        team_admin : this.team_admin
      }

    });

    modal.onDidDismiss().then(data=>{
      if(data.data &&  data.data['event']){
        let e : any  = data.data['event'];
        this.events.push(e);
      }
    })

    return await modal.present();
   }



}
