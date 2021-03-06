import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../../api/request.service';
import { ModalController } from '@ionic/angular';
import { PlayerFormPage } from '../../../pages/player/player-form/player-form.page';
import { DialogService } from '../../../api/util/dialog.service';
import { Model } from 'src/app/api/models/model';
import { ActivatedRoute } from '@angular/router';
import { UtilArrayService } from 'src/app/services/util-array.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  public team_id : any;
  public playerService : Model ;
  public list : any = [];
  public modelTeam : Model;


  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public modalController: ModalController,
    public dialog : DialogService,
    public route : ActivatedRoute,
    public utilArray : UtilArrayService

  ) {
    this.playerService = new Model('Player',request);
    this.modelTeam = new Model('Team',request);
    this.team_id = this.route.snapshot.paramMap.get('team_id');

  }
  
  ngOnInit(): void {
    //this.playerService.setModel('Player');
    
    this.load();//this.playerService.api_all();
  }


  load(event = null){
    console.log('load');
    if(this.team_id){
      this.modelTeam.api_loadAttribute(this.team_id,'players').subscribe(
        response => {
          if(response['status'] = 'success'){
            console.log('response' , response);
            this.list = response['Team']['players'];
          }
          if(event)
            event.target.complete();
        },
        error => {
          if(event)
            event.target.complete();
        }

      )
    }else{
      //this.list = this.playerService.list;
      //this.playerService.api_all(event);

      this.playerService.api_function('all').subscribe(
        response => {
          this.list = response['data'];
        },
        error=> {
          console.log(error);
        }
      )

    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: PlayerFormPage ,
      componentProps : {
        team_id : this.team_id
      }
    });

    modal.onDidDismiss().then(data=>{
      if(data.data && data.data['player']){
        const player = data.data['player'];
        //this.playerService.listAddLast(player);
        this.utilArray.listAddFirst(this.list , player);
      }
    })

    return await modal.present();
   }

   async showEdit(player){
    const modal = await this.modalController.create({
      component: PlayerFormPage ,
      componentProps: { id: player.id }
    });

    modal.onDidDismiss().then(data=>{
      if(data.data && data.data.hasOwnProperty('player')){
        const player = data.data['player'];
        //this.playerService.listUpdate(player.id,player);
        this.utilArray.listUpdate(this.list , player.id , player);
      }
    })

    return await modal.present();
   }

   confirmDelete(player){
    this.dialog.presentAlertConfirm('Confirmar','Estas seguro de eliminar este jugador',e => {
      this.delete(player)
    });
   }

   delete(player){

    if(!player.user_id){
     this.playerService.api_delete(player.id).subscribe(data => {
       console.log(data);
       if(data['status'] == 'success'){
         this.dialog.showToast('Jugador Eliminado',null,'success');
         this.utilArray.listDelete(this.list,player.id);
         //this.playerService.listDelete(player.id);
       }
     });
    }else{
      if(this.team_id){
        this.modelTeam.api_functionModel(this.team_id,'removePlayer',{player_id : player.id}).subscribe(
          response => {
            this.dialog.showToast('El Jugador ha sido eliminado de esta plantilla',null,'success');
            this.utilArray.listDelete(this.list,player.id);
          },
          error => {

          }
        )
      }
    }
   }


}
