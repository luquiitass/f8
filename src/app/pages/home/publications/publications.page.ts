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
import { DialogService } from 'src/app/api/util/dialog.service';
import { PathsImagesService } from 'src/app/services/paths-images.service';

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
  private processLike = false;


  constructor(
    public modalController: ModalController,
    public utilArray : UtilArrayService,
    public request : RequestService,
    public util : UtilService,
    public authUser : AuthUserService,
    public navCtrl : NavController,
    public transferData : TransferDataService,
    private router: Router,
    public dialog : DialogService,
    public pathImages : PathsImagesService
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


   async like(publication){
     publication.processLike = true;
     
     if(publication.liked){
      this.publcationModel.api_functionModel(publication.id,'removeLike',{user_id : this.user.id}).subscribe(
        response => {
          if(response['status'] == 'success'){
            publication.liked = ! publication.liked;
            publication.likes_count -= 1; 
            //this.utilArray.listUpdate(this.publications , publication.id , publication)
          }
          publication.processLike = false;
        },
        error => {
          console.error(error);
          publication.processLike = false;
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
          publication.processLike = false;
        },
        error => {
          console.error(error);
          publication.processLike = false;
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


   openMenuPublication(publication){
  
    this.dialog.actionSheetEditDelete(
      ()=>{
        this.editPublication(publication);
      },
      ()=>{
        this.dialog.presentAlertConfirm('Alerta','¿Seguro de eliminar esta aplicación?',()=>{
          this.publcationModel.api_delete(publication.id).subscribe(
            response => {
              if(response['status'] = 'success'){
                this.utilArray.listDelete(this.publications , publication.id);
                this.dialog.showToast('Publicacion Eliminada',null,'success')
              }
            }
          );
        })
      }
    )
   }

   async editPublication(publication){
    const modal = await this.modalController.create({
      component: FormPublicationPage ,
      componentProps : {
        id : publication.id
      }
    });

    modal.onDidDismiss().then(data=>{
      console.log('update publicacion')
      if(data.data && data.data['publication']){
        const publication = data.data['publication'];
        this.utilArray.listUpdate( this.publications , publication.id, publication );
      }
    })

    return await modal.present();
   }



}
