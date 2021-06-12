import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  currentPageTitle = 'Dashboard';

  appPages = [
    {
      title: 'Dashboard',
      url: '',
      icon: 'easel'
    },
    {
      title: 'Timeline',
      url: '/timeline',
      icon: 'film'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];
  constructor(    
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public auth : AuthUserService) { 
      this.initializeApp();
    }

  async ngOnInit() {
    await this.auth.updateUserApi();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });


    setInterval(()=>{
      if(this.auth.user)
        this.auth.userModel.api_loadAttribute(this.auth.user.id,'counts_not').subscribe(
          response => {
            console.log('update atribute counts_not' , response);
            let count = response['User']['counts_not'];

            if(count > this.auth.user.counts_not ){
              this.auth.user.counts_not = count;
            }
          }
        )
    },50000)
  }

  logout(){
    this.auth.logout();
  }


  get notificationsCount(){
    return this.auth.user && this.auth.user.counts_not ? this.auth.user.counts_not : 0 ;
  }
}
