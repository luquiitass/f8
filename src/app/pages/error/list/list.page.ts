import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { ModalController } from '@ionic/angular';
import { DialogService } from 'src/app/api/util/dialog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public errorService : Model;


  constructor(
    public request : RequestService,
    public modalController: ModalController,
    public dialog : DialogService
  ) {
    this.errorService = new Model('Error',request);
  }
  
  ngOnInit(): void {
    
    this.errorService.api_all();
  }


   confirmDelete(event){
    this.dialog.presentAlertConfirm('Confirmar','Estas seguro de eliminar este event',e => {
      this.delete(event)
    });
   }

   delete(event){
     this.errorService.api_delete(event.id).subscribe(data => {
       console.log(data);
       if(data['status'] == 'success'){
         this.dialog.showToast('Evento Eliminado',null,'success');
         this.errorService.listDelete(event.id);
       }
     });
   }


}
