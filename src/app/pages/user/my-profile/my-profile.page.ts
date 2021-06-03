import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { ModalController } from '@ionic/angular';
import { UserFormPage } from '../user-form/user-form.page';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  private user : any;
  private userModel : Model;


  constructor(
    public authUser : AuthUserService,
    public requestService : RequestService,
    public modalController: ModalController,
  ) { 
    this.userModel = new Model('User',requestService);
  }

  ngOnInit() {
    this.init();
  }

  async init(event = null){
    
    this.user = await this.authUser.getUser();
    console.log('authUser user' , this.user)

    if(this.user){
      this.userModel.api_functionModel(this.user.id,'pageMyProfile').subscribe(
        respose => {
          console.log('init myProfile',respose)
          if(respose['status'] == 'success'){
            this.user = respose['data'];
            //this.authUser.updateUser(this.user);
          }
          if(event)
            event.target.complete();
        },
        error => {
          console.error(error)
          if(event)
            event.target.complete();
        }
      
        )
    }
  }

  getPhoto(){
    return (this.user && this.user.photo ) ? this.user.photo.urlComplete : 'assets/images/profile.jpg' ; 
  }

  async showEdit(){
    const modal = await this.modalController.create({
      component: UserFormPage ,
      componentProps: { id: this.user.id }
    });

    modal.onDidDismiss().then(data=>{
      console.log(data);
      let item = data.data['user']
      this.user.first_name = item.first_name;
      this.user.last_name = item.last_name;
      this.user.photo = item.photo;
      this.user.email = item.email;


    })

    return await modal.present();
   }

}
