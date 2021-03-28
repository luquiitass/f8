import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../../api/request.service';
import { ModalController } from '@ionic/angular';
import { EventFormPage } from '../../../pages/event/event-form/event-form.page';
import { DialogService } from '../../../api/util/dialog.service';
import { Model } from 'src/app/api/models/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public eventService : Model;


  constructor(
    public request : RequestService,
    public modalController: ModalController,
    public dialog : DialogService
  ) {
    this.eventService = new Model('Event',request);
  }
  
  ngOnInit(): void {
    
    this.eventService.api_all();
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: EventFormPage ,
    });

    modal.onDidDismiss().then(data=>{
      const event = data.data['event'];
      this.eventService.listAddLast(event);
    })

    return await modal.present();
   }

   async showEdit(event){
    const modal = await this.modalController.create({
      component: EventFormPage ,
      componentProps: { event: event }
    });

    modal.onDidDismiss().then(data=>{
      console.log(data);
      this.eventService.listUpdate(event.id,event);

    })

    return await modal.present();
   }

   confirmDelete(event){
    this.dialog.presentAlertConfirm('Confirmar','Estas seguro de eliminar este event',e => {
      this.delete(event)
    });
   }

   delete(event){
     this.eventService.api_delete(event.id).subscribe(data => {
       console.log(data);
       if(data['status'] == 'success'){
         this.dialog.showToast('Evento Eliminado',null,'success');
         this.eventService.listDelete(event.id);
       }
     });
   }


}
