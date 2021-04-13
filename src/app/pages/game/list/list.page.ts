import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../../api/request.service';
import { ModalController } from '@ionic/angular';
import { GameFormPage } from '../../../pages/game/game-form/game-form.page';
import { DialogService } from '../../../api/util/dialog.service';
import { Model } from 'src/app/api/models/model';
import { IfStmt } from '@angular/compiler';
import * as moment from 'moment';

import { from } from 'rxjs';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public games = [];
  public gameService : Model;

  public tabs = []
  public tabSelected :any;



  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public modalController: ModalController,
    public dialog : DialogService,
    public util : UtilService
  ) {
    this.gameService = new Model('Game',request);
  }
  
  ngOnInit(): void {
//    this.gameService.setModel('Game');
    //this.gameService.api_all();
    this.init();
  
  }

  init( event = null){
    this.gameService.api_function('pageAdminAll').subscribe(
      response => {
        this.tabs = response['data']['dates'];
        this.selectTab();
        console.log(response)
        if(event)
          event.target.complete()
        

      },
      error => {
        if(event)
          event.target.completed()
      }
    )
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: GameFormPage ,
      componentProps : {
        date : this.tabs && this.tabs[this.tabSelected] ? this.tabs[this.tabSelected].date : ''
      }
    });

    modal.onDidDismiss().then(data=>{
      const game = data.data['game'];
      this.gameService.listAddLast(game);
    })

    return await modal.present();
   }

   async showEdit(game){
    const modal = await this.modalController.create({
      component: GameFormPage ,
      componentProps: { id: game.id }
    });

    modal.onDidDismiss().then(data=>{
      const game = data.data['game'];
      this.gameService.listUpdate(game.id,game);

    })

    return await modal.present();
   }

   confirmDelete(game){
    this.dialog.presentAlertConfirm('Confirmar','Estas seguro de eliminar este game',e => {
      this.delete(game)
    });
   }

   delete(game){
     this.gameService.api_delete(game.id).subscribe(data => {
       console.log(data);
       if(data['status'] == 'success'){
         this.dialog.showToast('Game Eliminado',null,'success');
         this.gameService.listDelete(game.id);
       }
     });
   }

   showItem(item){
     console.log(item)
   }

   selectDate(event){
    let index = parseInt( event.detail.value );

    let tab = this.tabs[index];

    if(tab['results']){
      this.games = tab['results']
      this.focusSegment()
      return;
    }
    this.gameService.api_function('adminByDate',{'date' : tab['date']}).subscribe(
      response => {
        if(response['status'] == 'success'){
          this.tabs[index]['results'] = response['data']
          this.games = this.tabs[index]['results'];
          this.focusSegment()
        }
        console.log(response);
      },
      error => {
        console.error(error);
      }
    )

  }

  focusSegment() {
    let segmentId = 'sgm_' + this.tabSelected;
    console.log('select segment : ', segmentId)
    document.getElementById(segmentId).scrollIntoView({ 
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async selectTab(){
    if(this.tabs.length > 0 ){
      let now = moment()
      let tabSelect = 0;
      this.tabs.forEach(( tab, i) => {
        let date_tab = moment(tab.date)
        if(date_tab.isAfter( now ) && tabSelect == 0 ){
          tabSelect = i
        }
      });

      this.selectDate({detail:{value:tabSelect}})

      this.tabSelected = tabSelect;

      await this.util.delay(1500)

      this.focusSegment();
    }
  }



}
