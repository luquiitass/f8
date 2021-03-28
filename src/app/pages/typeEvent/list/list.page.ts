import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { DialogService } from 'src/app/api/util/dialog.service';
import { ModalController } from '@ionic/angular';
import { TypeEventFormPage } from '../type-event-form/type-event-form.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public typeEventService : Model ;


  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public modalController: ModalController,
    public dialog : DialogService
  ) {
    this.typeEventService = new Model('TypeEvent',request)
  }
  
  ngOnInit(): void {
    //this.typeEventService.setModel('TypeEvent');
    this.typeEventService.api_all();
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: TypeEventFormPage ,
    });

    modal.onDidDismiss().then(data=>{
      const typeEvent = data.data['typeEvent'];
      this.typeEventService.listAddLast(typeEvent);
    })

    return await modal.present();
   }

   async showEdit(typeEvent){
    const modal = await this.modalController.create({
      component: TypeEventFormPage ,
      componentProps: { id: typeEvent.id }
    });

    modal.onDidDismiss().then(data=>{
      console.log(data);
      let item = data.data['typeEvent']
      this.typeEventService.listUpdate(typeEvent.id,item);

    })

    return await modal.present();
   }

   confirmDelete(typeEvent){
    this.dialog.presentAlertConfirm('Confirmar','Estas seguro de eliminar este typeEvent',e => {
      this.delete(typeEvent)
    });
   }

   delete(typeEvent){
     this.typeEventService.api_delete(typeEvent.id).subscribe(data => {
       console.log(data);
       if(data['status'] == 'success'){
         this.dialog.showToast('TypeEvent Eliminado',null,'success');
         this.typeEventService.listDelete(typeEvent.id);
       }
     });
   }

}
