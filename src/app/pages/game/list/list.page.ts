import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../../api/request.service';
import { ModalController } from '@ionic/angular';
import { GameFormPage } from '../../../pages/game/game-form/game-form.page';
import { DialogService } from '../../../api/util/dialog.service';
import { Model } from 'src/app/api/models/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public games = [];
  public gameService : Model;


  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public modalController: ModalController,
    public dialog : DialogService
  ) {
    this.gameService = new Model('Game',request);
  }
  
  ngOnInit(): void {
//    this.gameService.setModel('Game');
    this.gameService.api_all();
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: GameFormPage ,
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

}
