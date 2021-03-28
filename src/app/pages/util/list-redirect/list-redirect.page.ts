import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/api/util/dialog.service';
import { ModalController, NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-redirect',
  templateUrl: './list-redirect.page.html',
  styleUrls: ['./list-redirect.page.scss'],
})
export class ListRedirectPage implements OnInit {

  private list : any;
  private title : any;

  constructor(
    public dialogService : DialogService,
    public viewCtrl: ModalController,
    public navParams: NavParams,
    public navCtrl : NavController
  ) { 
    this.list =    navParams.get('list') ?? [];
    this.title = navParams.get('title') ?? 'Opciones';
  }

  ngOnInit() {
  }

  dimiss(){
    this.viewCtrl.dismiss();
  }

  goTo(item){
    console.log('goTo')
    this.navCtrl.navigateForward(item.route);
    this.viewCtrl.dismiss();
  }

}
