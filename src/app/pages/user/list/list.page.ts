import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../../api/request.service';
import { ModalController } from '@ionic/angular';
import { UserFormPage } from '../../../pages/user/user-form/user-form.page';
import { DialogService } from '../../../api/util/dialog.service';
import { Model } from 'src/app/api/models/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public userService : Model ;


  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public modalController: ModalController,
    public dialog : DialogService
  ) {
    this.userService = new Model('User',request)
  }
  
  ngOnInit(): void {
    //this.userService.setModel('User');
    this.userService.api_all();
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: UserFormPage ,
    });

    modal.onDidDismiss().then(data=>{
      const user = data.data['user'];
      this.userService.listAddLast(user);
    })

    return await modal.present();
   }

   async showEdit(user){
    const modal = await this.modalController.create({
      component: UserFormPage ,
      componentProps: { id: user.id }
    });

    modal.onDidDismiss().then(data=>{
      console.log(data);
      let item = data.data['user']
      this.userService.listUpdate(user.id,item);

    })

    return await modal.present();
   }

   confirmDelete(user){
    this.dialog.presentAlertConfirm('Confirmar','Estas seguro de eliminar este user',e => {
      this.delete(user)
    });
   }

   delete(user){
     this.userService.api_delete(user.id).subscribe(data => {
       console.log(data);
       if(data['status'] == 'success'){
         this.dialog.showToast('User Eliminado',null,'success');
         this.userService.listDelete(user.id);
       }
     });
   }
}
