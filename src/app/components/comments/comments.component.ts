import { Component, OnInit, Input, SimpleChanges, Output ,EventEmitter } from '@angular/core';
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
  @Input('comments') comments = [];
  @Input('withTitle') withTitle : boolean = true;

  @Output() onUpdateComments = new EventEmitter<any>();

  

  public commentModel : Model;
  public relationModel : Model;
  public comment : any;
  public listComments = [];
  public commentText : ''
  public sending = false;
  
  constructor(
    public authService : AuthUserService,
    public request : RequestService,
    public util : UtilService,
    public modalController: ModalController
  ) {
    this.commentModel = new Model('Comment',request)
   }

  ngOnInit() {
    this.init();
  }

  init(){
    this.comment =  {
      idRelation : this.idRelation,
      nameRelationModel : this.nameRelationModel,
      body : this.commentText,
    }

    this.resetComment()
    this.loadCooments()

  }

  loadCooments(){
    this.listComments = this.comments;
    if(this.comments && this.comments.length > 0){
      //this.listComments = this.comments
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
      this.sending = true;
      this.commentModel.api_function('add',this.comment).subscribe(
        response => {
          if(response['status'] == 'success'){
            var data : any = response['data'];
            this.listComments.push(data)
            if(this.onUpdateComments)
              this.onUpdateComments.emit(this.listComments);
            this.resetComment()
          }
          this.sending = false;
        },
        error => {
          this.sending = false;
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

  ngOnChanges(changes: SimpleChanges) {
        
    //console.log('changes')
    if(changes['comments']){
      this.loadCooments();
    }
    
  }

}
