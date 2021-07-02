import { Component, OnInit, Input } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { UtilService } from 'src/app/services/util.service';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { Model } from 'src/app/api/models/model';
import { ModalController } from '@ionic/angular';
import { RequestService } from 'src/app/api/request.service';
import { PublicationPage } from 'src/app/pages/publications/publication/publication.page';
import { UtilArrayService } from 'src/app/services/util-array.service';
import { DialogService } from 'src/app/api/util/dialog.service';
import { FormPublicationPage } from 'src/app/pages/publications/form-publication/form-publication.page';
import { UtilPhotoService } from 'src/app/services/util-photo.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit {


  @Input('publication') publication;
  public publcationModel : Model;
  private user : any;


  constructor(
    private authUser : AuthUserService,
    private util : UtilService,
    public modalController: ModalController,
    public request : RequestService,
    public utilArray : UtilArrayService,
    public dialog : DialogService,
    public utilPhoto : UtilPhotoService
  ) {

    this.publcationModel = new Model('Publication',request);
    this.user = authUser.user;

   }

  ngOnInit() {}


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
     
     this.utilArray.listUpdate( this.user.publications, publication.id ,publication );
    
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
               this.utilArray.listDelete(this.user.publications , publication.id);
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
       this.utilArray.listUpdate( this.user.publications , publication.id, publication );
     }
   })

   return await modal.present();
  }


}
