import { Component, OnInit } from '@angular/core';

import { AuthUserService } from 'src/app/services/auth-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authUserService : AuthUserService

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

}
