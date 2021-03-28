import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public alertController: AlertController,
    public toastCtr : ToastController,
  ) { }


  async presentAlertConfirm(title,message,handlerOk) {
    const alert = await this.alertController.create({
      header: title,
      message: `<strong>${message}</strong>!!!`,
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


}
