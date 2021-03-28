import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../../api/request.service';
import { ModalController } from '@ionic/angular';
import { FormPage } from '../../../pages/team/form/form.page';
import { DialogService } from '../../../api/util/dialog.service';
import { Model } from 'src/app/api/models/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public teamService : Model;

  constructor(
    public request : RequestService,
    public modalController: ModalController,
    public dialog : DialogService
  ) {
    this.teamService = new Model('Team',request);
  }
  
  ngOnInit(): void {
    //this.teamService.setModel('Team');
    this.teamService.api_all();
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: FormPage ,
    });

    modal.onDidDismiss().then(data=>{
      const team = data.data['team'];
      this.teamService.listAddLast(team);
    })

    return await modal.present();
   }

   async showEdit(team){
    const modal = await this.modalController.create({
      component: FormPage ,
      componentProps: { id: team.id }
    });

    modal.onDidDismiss().then(data=>{
      const team = data.data['team'];
      this.teamService.listUpdate(team.id,team);

    })

    return await modal.present();
   }

   confirmDelete(team){
    this.dialog.presentAlertConfirm('Confirmar','Estas seguro de eliminar este equipo',e => {
      this.delete(team)
    });
   }

   delete(team){
     this.teamService.api_delete(team.id).subscribe(data => {
       console.log(data);
       if(data['status'] == 'success'){
         this.dialog.showToast('Team Eliminado',null,'success');
         this.teamService.listDelete(team.id);
       }
     });
   }

}
