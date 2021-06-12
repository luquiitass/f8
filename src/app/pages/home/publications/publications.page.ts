import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, IonContent } from '@ionic/angular';
import { FormPublicationPage } from '../../publications/form-publication/form-publication.page';
import { UtilArrayService } from 'src/app/services/util-array.service';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { UtilService } from 'src/app/services/util.service';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { Router } from '@angular/router';
import { PublicationPage } from '../../publications/publication/publication.page';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {

  public publcationModel : Model;
  public publications  = [];
  public user : any;


  public firstLoad = true;
  public listSkeleton = new Array(8)


  constructor(
    public modalController: ModalController,
    public utilArray : UtilArrayService,
    public request : RequestService,
    public util : UtilService,
    public authUser : AuthUserService,
    public navCtrl : NavController,
    public transferData : TransferDataService,
    private router: Router
  ) {
    this.publcationModel = new Model('Publication',request);

   }

  async ngOnInit() {
    this.user = await this.authUser.getUser();
    this.init();
  }

  
  async init($event = null){
    //await this.util.delay(5000);
    this.publcationModel.api_function('list',{}).subscribe(
      response => {
        console.log(response);
        if(response['status'] == 'success')
          this.publications = response['data'];

        if($event){
          $event.target.complete();
        }
        this.firstLoad = false;
      },
      error => {
        console.log(error);
        if($event){
          $event.target.complete();
        }
        this.firstLoad = false;
      }
    )
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: FormPublicationPage ,
      componentProps : {
        //date : this.tabs && this.tabs[this.tabSelected] ? this.tabs[this.tabSelected].date : ''
      }
    });

    modal.onDidDismiss().then(data=>{
      console.log('crate puvlivsa')
      const publication = data.data['publication'];
      this.utilArray.listAddFirst( this.publications , publication );
      
    })

    return await modal.present();
   }


   async showPhotoUser(photo){
     console.log('show photo ', photo)
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: photo ? photo.urlComplete : 'assets/images/profile.jpg',
        scheme : 'dark'
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true,
    });

    return await modal.present();
   }


   like(publication){
     if(publication.liked){

      this.publcationModel.api_functionModel(publication.id,'removeLike',{user_id : this.user.id}).subscribe(
        response => {
          if(response['status'] == 'success'){
            publication.liked = ! publication.liked;
            publication.likes_count -= 1; 
            //this.utilArray.listUpdate(this.publications , publication.id , publication)
          }
        },
        error => {
          console.error(error);
        }
      )
     }
     else {
      this.publcationModel.api_functionModel(publication.id,'addLike',{user_id : this.user.id}).subscribe(
        response => {
          if(response['status'] == 'success'){
            publication.liked = ! publication.liked;
            publication.likes_count += 1;
            //this.utilArray.listUpdate(this.publications , publication.id , publication)
          }
        },
        error => {
          console.error(error);
        }
      )
     }
   }


   async showPublication(publication , segment = 'comments',index = null){

    const modal = await this.modalController.create({
      component: PublicationPage ,
      componentProps : {
        id : publication.id,
        segment : segment
      }
    });

    modal.onDidDismiss().then(data=>{
      console.log('update publication')
      const publication = data.data['publication'];
      
      this.utilArray.listUpdate( this.publications, publication.id ,publication );
     
    })

    return await modal.present();
   }

   ionViewDidEnter(){
     console.log('lucas ionViewDidEnter')
   }

   ionViewDidLeave(){
    console.log('lucas ionViewDidLeave')
  }

  ionViewWillEnter(){
    console.log('lucas ionViewWillEnter')
  }

  ionViewWillLeave(){
    console.log('lucas ionViewWillLeave')
  }

  ionViewWillUnload(){
    console.log('lucas ionViewWillUnload')
  }

  ionViewCanEnter(){
    console.log('lucas ionViewCanEnter')
  }

  ionViewCanLeave(){
    console.log('lucas ionViewCanLeave')
  }

  ngOnDestroy(){
    console.log('lucas ngOnDestroy')
  }



}
