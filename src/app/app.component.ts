import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthUserService } from './services/auth-user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authUser : AuthUserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () =>  {
      console.log('init APP')
      await this.authUser.getUser();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
