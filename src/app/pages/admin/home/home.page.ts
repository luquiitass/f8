import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { SearchPage } from '../../search/search.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public userAuthService : AuthUserService,
    public modalController: ModalController,


  ) { }

  ngOnInit() {
  }

  logout(){
    this.userAuthService.logout();
  }

  async search(){
    const modal = await this.modalController.create({
      component: SearchPage ,
      componentProps: { 
        cancellable: false,
        model : 'User',
        function : 'searchUser',
        multiple : false
      }
    });

    modal.onDidDismiss().then(data=>{
      const game = data.data['item'];
    })

    return await modal.present();
  }

 

}
