import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from 'src/app/api/request.service';
import { DialogService } from 'src/app/api/util/dialog.service';
import { ModalController, Platform, NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { Model } from 'src/app/api/models/model';
import { RedesFormPage } from 'src/app/pages/redes/redes-form/redes-form.page';
import { UtilArrayService } from 'src/app/services/util-array.service';

//import { InAppBrowser } from '@ionic-native/in-app-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';





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
    @Input('withRefresh') withRefresh = false;

  constructor(
    public request : RequestService,
    public dialog : DialogService,
    public modalController: ModalController,
    public util : UtilService,
    public utilArray : UtilArrayService,
    public nacCtrl : NavController,
    //private platform: Platform,
    public inAppBrowser : InAppBrowser,
    //public appAvailability : AppAvailability

    
  ) { 
    this.redModel = new Model('Red',request);
  }

  ngOnInit() {
    this.load();
    //this.isAdmin = true;
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
    this.dialog.presentAlertConfirm('Confirmar','Estas seguro de eliminar esta Red Social',e => {
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

   getColorIcon(red){
    switch(red.name){
      case 'Facebook':
         return 'facebook-color'
      case 'Instagram':
          return 'instagram-color'
      case 'WhatsApp':
        return 'whatsapp-color'
      case 'Twitter':
        return 'twitter-color'
     }
   }

   openRed(red){
    if(red && red.url){
      let baseUrl = '';

      switch(red.name){
        case 'Facebook':
          baseUrl = 'https://www.facebook.com/'
           break;
        case 'Instagram':
          baseUrl = 'https://www.instagram.com/'
          break;
        case 'WhatsApp':
          return 'whatsapp-color'
        case 'Twitter':
          baseUrl = 'https://twitter.com/'
          break;
       }

/*      const browser = this.iab.create(baseUrl + red.url);

      browser.show()
  */
    }
   }

   

   select(red){
     this.openAppUrl(red.name,red.url);
   }

   openAppUrl(app: string, name: string, id?: string) {
    switch (app) {
        case 'Facebook':
          this.openUrl('https://www.facebook.com/' + name);
          break;
        /*
          this.launchApp(
              'fb://', 'com.facebook.katana',
              'fb://profile/' + id,
              'fb://page/' + id,
              'https://www.facebook.com/' + name);
            break;*/
        case 'Instagram':
            this.openUrl('https://www.instagram.com/' + name);
            break;
        /*
            this.launchApp(
              'instagram://',
              'com.instagram.android',
              'instagram://user?username=' + name,
              'instagram://user?username=' + name,
              'https://www.instagram.com/' + name);
            break;*/
        case 'Twitter':
              this.openUrl('https://twitter.com/' + name)
        /*
            this.launchApp(
              'twitter://', 'com.twitter.android',
              'twitter://user?screen_name=' + name,
              'twitter://user?screen_name=' + name,
              'https://twitter.com/' + name);
            break;
            */
        case 'WhatsApp':
          this.openUrl('https://api.whatsapp.com/send?phone=+549' + name);
        default:
            break;
      }
  }
/*
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

openUrl(url){
  const browser = this.inAppBrowser.create(url,'_self');
}


}
