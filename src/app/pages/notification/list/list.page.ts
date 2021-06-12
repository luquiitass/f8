import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { UtilArrayService } from 'src/app/services/util-array.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public notifications = [];
  public notificationModel : Model;
  public userModel : Model;

  constructor(
    public request : RequestService,
    public userAuth : AuthUserService,
    public utilArray : UtilArrayService,
    public navCtrl : NavController
  ) {
    this.notificationModel = new Model('Notification',request);
    this.userModel = new Model('User',request);
   }

  ngOnInit() {
    this.init();
  }


  init($event = null){

    this.userModel.api_functionModel(this.userAuth.user.id , 'resetNotifications').subscribe(()=>{
      console.log('restart count  notifications')
      this.userAuth.user.counts_not = 0;
      this.userAuth.saveUser();
    })

    this.notifications = this.userAuth.user.notifications;
    
    this.userModel.api_functionModel(this.userAuth.user.id ,'pageNotifications',{}).subscribe(
      response => {
        console.log(response);
        this.notifications = response['data']
        if($event)
          $event.target.complete();
      },
      error => {
        console.log(error)
        if($event)
          $event.target.complete();
      }
    )
  }

  openModal(){

  }

  visibleNot(not){
    if(not.id)
      this.notificationModel.api_functionModel(not.id,'viewed').subscribe(
        (response)=>{
          let notification = response['data'];
          this.utilArray.listUpdate(this.notifications ,notification.id , notification);
      })

    this.navCtrl.navigateForward(not.route);
  }

}
