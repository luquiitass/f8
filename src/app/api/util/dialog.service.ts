import { Injectable } from '@angular/core';
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public alertController: AlertController,
    public toastCtr : ToastController,
    public actionSheetController: ActionSheetController,

  ) { }


  async presentAlertConfirm(title,message,handlerOk) {
    const alert = await this.alertController.create({
      header: title,
      message: `<strong>${message}</strong>`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data)=>{
            alert.dismiss();
          }
        }, {
          text: 'Aceptar',
          handler: handlerOk
        }
      ]
    });

    await alert.present();
  }

  async showToast(msj , header = undefined,color = 'primary',duration=3000 ) {
    const toast = await this.toastCtr.create({
      header : header, 
      color :color,
      message: msj,
      duration: duration
    });
    toast.present();
  }

  async actionSheetEditDelete(callbackEdit,callbackDelet){

    let buttons = [];

    if(callbackEdit){
      buttons.push( {
        text: 'Modificar',
        icon: 'create-outline',
        handler: () => {
          console.log('Edit clicked');
          callbackEdit()
          //comment.edit = true;
          //this.commentEdit = {...comment};
        }
      })
    }

    if(callbackDelet){
      buttons.push({
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          //this.confirmDelete(comment);
          callbackDelet();
        }
      })
    }

    buttons.push( {
      text: 'Cancelar',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    });

    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: buttons
    });
    await actionSheet.present();

    //const { role } = await actionSheet.onDidDismiss();
  }


}
