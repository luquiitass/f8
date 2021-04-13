import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from 'src/app/api/request.service';
import { DialogService } from 'src/app/api/util/dialog.service';
import { ModalController, Platform } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { Model } from 'src/app/api/models/model';
import { RedesFormPage } from 'src/app/pages/redes/redes-form/redes-form.page';
import { UtilArrayService } from 'src/app/services/util-array.service';
//import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser';
//import { AppAvailability } from '@ionic-native/app-availability/ngx';



@Component({
  selector: 'app-red-list',
  templateUrl: './red-list.component.html',
  styleUrls: ['./red-list.component.scss'],
})
export class RedListComponent implements OnInit {

    public redModel : Model;
    public list : [];

    @Input('nameModel') nameModel;
    @Input('idModel') idModel;
    @Input('isAdmin') isAdmin = false;

  constructor(
    public request : RequestService,
    public dialog : DialogService,
    public modalController: ModalController,
    public util : UtilService,
    public utilArray : UtilArrayService,
    //private platform: Platform,
    //public inAppBrowser : InAppBrowser,
    //public appAvailability : AppAvailability

    
  ) { 
    this.redModel = new Model('Red',request);
  }

  ngOnInit() {
    this.load();
  }

  load(event = null){
    this.redModel.api_function('pageTeam',{nameModel: this.nameModel, idModel : this.idModel}).subscribe(
      response => {
        this.list = response['data'];
        console.log(response);
        if(event)
          event.target.complete()
      },
      error => {
        console.error(error);
        if(event)
          event.target.complete()
      }
    )

  }

  async openModal() {
    const modal = await this.modalController.create({
      component: RedesFormPage ,
      componentProps : {
        nameModel : this.nameModel,
        idModel : this.idModel
      }
    });

    modal.onDidDismiss().then(data=>{
      const red = data.data['red'];
      this.utilArray.listAddLast(this.list,  red);
      //this.redModel.listAddLast(red);

    })

    return await modal.present();
   }

   async showEdit(red){
    const modal = await this.modalController.create({
      component: RedesFormPage ,
      componentProps: { id: red.id }
    });

    modal.onDidDismiss().then(data=>{
      const red = data.data['red'];
      this.utilArray.listUpdate(this.list, red.id,red);

    })

    return await modal.present();
   }

   confirmDelete(red){
    this.dialog.presentAlertConfirm('Confirmar','Estas seguro de eliminar este red',e => {
      this.delete(red)
    });
   }

   delete(red){
     this.redModel.api_delete(red.id).subscribe(data => {
       console.log(data);
       if(data['status'] == 'success'){
         this.dialog.showToast('Game Eliminado',null,'success');
         this.utilArray.listDelete(this.list, red.id);
       }
     });
   }

   getIcon(red){
     switch(red.name){
      case 'Facebook':
         return 'logo-facebook'
      case 'Instagram':
          return 'logo-instagram'
      case 'WhatsApp':
        return 'logo-whatsapp'
      case 'Twitter':
        return 'logo-twitter'
     }
   }
/*
   select(red){
     this.openAppUrl(red.name,red.url);
   }

   openAppUrl(app: string, name: string, id?: string) {
    switch (app) {
        case 'Facebook':
            this.launchApp(
              'fb://', 'com.facebook.katana',
              'fb://profile/' + id,
              'fb://page/' + id,
              'https://www.facebook.com/' + name);
            break;
        case 'Instagram':
            this.launchApp(
              'instagram://',
              'com.instagram.android',
              'instagram://user?username=' + name,
              'instagram://user?username=' + name,
              'https://www.instagram.com/' + name);
            break;
        case 'Twitter':
            this.launchApp(
              'twitter://', 'com.twitter.android',
              'twitter://user?screen_name=' + name,
              'twitter://user?screen_name=' + name,
              'https://twitter.com/' + name);
            break;
        default:
            break;
      }
  }

private launchApp(iosApp: string, androidApp: string, appUrlIOS: string, appUrlAndroid: string, webUrl: string) {
    let app: string;
    let appUrl: string;
    // check if the platform is ios or android, else open the web url
    if (this.platform.is('ios')) {
      app = iosApp;
      appUrl = appUrlIOS;
    } else if (this.platform.is('android')) {
      app = androidApp;
      appUrl = appUrlAndroid;
    } else {
      const browser: InAppBrowserObject = this.inAppBrowser.create(webUrl, '_system');
      return;
    }
    this.appAvailability.check(app).then(
        () => {
            // success callback, the app exists and we can open it
            const browser: InAppBrowserObject = this.inAppBrowser.create(appUrl, '_system');
        },
        () => {
            // error callback, the app does not exist, open regular web url instead
            const browser: InAppBrowserObject = this.inAppBrowser.create(webUrl, '_system');
        }
    );
}
*/

}
