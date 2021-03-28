import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../../api/request.service';
import { ModalController } from '@ionic/angular';
import { PositionFormPage } from '../../../pages/position/position-form/position-form.page';
import { DialogService } from '../../../api/util/dialog.service';
import { Model } from 'src/app/api/models/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public positionService : Model ;


  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public modalController: ModalController,
    public dialog : DialogService
  ) {
    this.positionService = new Model('Position',request)
  }
  
  ngOnInit(): void {
    //this.positionService.setModel('Position');
    this.positionService.api_all();
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: PositionFormPage ,
    });

    modal.onDidDismiss().then(data=>{
      const posicion = data.data['posicion'];
      this.positionService.listAddLast(posicion);
    })

    return await modal.present();
   }

   async showEdit(posicion){
    const modal = await this.modalController.create({
      component: PositionFormPage ,
      componentProps: { id: posicion.id }
    });

    modal.onDidDismiss().then(data=>{
      console.log(data);
      this.positionService.listUpdate(posicion.id,posicion);

    })

    return await modal.present();
   }

   confirmDelete(posicion){
    this.dialog.presentAlertConfirm('Confirmar','Estas seguro de eliminar este posicion',e => {
      this.delete(posicion)
    });
   }

   delete(posicion){
     this.positionService.api_delete(posicion.id).subscribe(data => {
       console.log(data);
       if(data['status'] == 'success'){
         this.dialog.showToast('Position Eliminado',null,'success');
         this.positionService.listDelete(posicion.id);
       }
     });
   }

}
