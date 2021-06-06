import { Component, OnInit, Input } from '@angular/core';
import { IonItem, ModalController } from '@ionic/angular';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { DialogService } from 'src/app/api/util/dialog.service';
import { EventFormPage } from 'src/app/pages/event/event-form/event-form.page';

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
  //isAdmin = false;
  



  constructor(
    public requestService : RequestService,
    public dialog : DialogService,
    public modalController: ModalController,


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
          }
          console.log(this.events);
        }
      )
    
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
      componentProps: { game_id: this.game_id }

    });

    modal.onDidDismiss().then(data=>{
      let e : any  = data.data['event'];
      this.events.push(e);
    })

    return await modal.present();
   }



}
