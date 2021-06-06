import { Component, OnInit, Input } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  @Input('nameRelationModel') nameRelationModel;
  @Input('idRelation') idRelation;
  @Input('comments') comments;

  public commentModel : Model;
  public relationModel : Model;
  public comment : any;
  public listComments = [];
  public commentText : ''
  
  constructor(
    public authService : AuthUserService,
    public request : RequestService,
    public util : UtilService,
    public modalController: ModalController
  ) {
    this.commentModel = new Model('Comment',request)
   }

  ngOnInit() {
    this.inmit();
  }

  inmit(){
    this.comment =  {
      idRelation : this.idRelation,
      nameRelationModel : this.nameRelationModel,
      body : this.commentText,
    }

    this.resetComment()
    this.loadCooments()

  }

  loadCooments(){

    if(this.comments && this.comments.length > 0){
      this.listComments = this.comments
      return;
    }

    this.relationModel = new Model(this.nameRelationModel,this.request);

      this.relationModel.api_loadAttribute(this.idRelation,'comments').subscribe(
        response => {
          if(response['status'] == 'success'){
            this.listComments = response[this.nameRelationModel]['comments'];
          }
        },
        error => {

        }
      )
  }

  resetComment(){
    this.comment.body = '';
  }

  send() {
    console.log('send');
    if(this.comment.body){
      //this.comment.body = this.commentText;
      this.commentModel.api_function('add',this.comment).subscribe(
        response => {
          if(response['status'] == 'success'){
            var data : any = response['data'];
            this.listComments.push(data)
            this.resetComment()
          }
          console.log(response)
        },
        error => {
          console.error(error)
        }
      )


    }


  }

  formatDate(val){
    return moment(val).locale('es').fromNow();
  }

  getPhoto(comment){
    return comment.user.photo ? comment.user.photo.urlCompleteThumb : 'assets/images/profile.jpg';
  }
  

  async openViewer(comment) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: comment.user.photo ? comment.user.photo.urlComplete : 'assets/images/profile.jpg',
        scheme : 'dark'
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true,
    });

    return await modal.present();
  }
}
