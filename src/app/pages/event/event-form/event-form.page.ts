import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { IonItem, NavParams, ModalController } from '@ionic/angular';
import { RequestService } from 'src/app/api/request.service';
import { DialogService } from 'src/app/api/util/dialog.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage implements OnInit {

  gameModel : Model;
  eventModel : Model;
  game_id : any ;
  dataEvent : any;
  event : any;
  id : any;
  types_events : [];
  team_admin : any;

  constructor(
    public navParams : NavParams,
    public requestService : RequestService,
    public dialogService : DialogService,
    public viewCtrl: ModalController,


  ) {
      this.gameModel = new Model('Game',requestService)
      this.eventModel = new Model('Event',requestService)
      this.game_id = navParams.get('game_id') ;
      this.id = navParams.get('id');
      this.team_admin = navParams.get('team_admin');

   }

  async ngOnInit() {
    await this.init();
    this.loadEvent();
  }


  loadEvent(){
    if(this.id){

    }else{
      this.event = {
        game_id : this.game_id,
        type_event_id : '',
        player_id : '',
        team_id : this.team_admin ? this.team_admin.id : '',
        time : ''
      }
    }
  }


  async init(){
    await this.eventModel.api_function('dataEventCreate',{game_id : this.game_id }).subscribe(
      data => {
        if(data['status'] == 'success'){
          this.dataEvent = data['data'];
          this.types_events = this.dataEvent['types_events'];
        }
        console.log('ty',this.types_events);
        console.log(this.dataEvent);

      }
    )
  }

  getPlayers(){
    let id = this.event.team_id; 
    
    if(this.team_admin)
      id = this.event.team_id;
    
    if(id){
      let team = this.dataEvent.teams.find(t => t.id === id );
      if(team)
        return team.players;
    }
    return [];
  }


  submit(){
    if(this.event.id){
      this.eventModel.api_update(this.event).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          console.log(data);
          this.dismiss(data['Event'])
        }
      });

    }else{
      this.eventModel.api_create(this.event).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['Event'])
        }
    })
    }
  }

  dismiss(event) {
    this.viewCtrl.dismiss(
      {
        event : event,
      }
    );
  }

  close(){
    this.viewCtrl.dismiss();
  }

  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day == 6 ;
  }

  print(){
    console.log(this.event);
  }

}
