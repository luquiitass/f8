import { Component, OnInit } from '@angular/core';

import { AuthUserService } from 'src/app/services/auth-user.service';
import { ModalController } from '@ionic/angular';
import { UserFormPage } from '../user/user-form/user-form.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authUserService : AuthUserService,
    public modalController: ModalController,


  ) { }

  ngOnInit() {
    this.authUserService.redirect();
  }

  googleAuth() {
    /*this.googlePlus.login({})
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(`GoogleAuth Error`, JSON.stringify(err)));
    //return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
    */
  }


  login(form){
    this.authUserService.login(form.value);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: UserFormPage ,
    });

    modal.onDidDismiss().then(data=>{
      //const user = data.data['user'];
      //this.userService.listAddLast(user);
    })

    return await modal.present();
   }

}
