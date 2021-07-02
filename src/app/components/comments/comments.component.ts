import { Component, OnInit, Input, SimpleChanges, Output ,EventEmitter } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { DialogService } from 'src/app/api/util/dialog.service';
import { UtilArrayService } from 'src/app/services/util-array.service';


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
  public updatingComment = false;
  public commentEdit : {};
  
  constructor(
    public authService : AuthUserService,
    public request : RequestService,
    public util : UtilService,
    public modalController: ModalController,
    public dialog : DialogService,
    public utilArray : UtilArrayService,
    public authUser : AuthUserService

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

  loadCooments($event = null){
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
          if($event)
            $event.target.complete();
        },
        error => {
          if($event)
            $event.target.complete();
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
      this.comment.body = this.comment.body.trim();
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

  async openMenuComment(comment){
    this.dialog.actionSheetEditDelete(
      ()=>{
        comment.edit = true;
        this.commentEdit = {...comment};
      },
      ()=> {
        this.confirmDelete(comment);
      })
  }

  confirmDelete(comment){
    this.dialog.presentAlertConfirm('Confirmar','¿Estas seguro de eliminar este comentario?',e => {
      this.delete(comment)
    });
   }

   delete(comment){
     this.commentModel.api_delete(comment.id).subscribe(data => {
       console.log(data);
       if(data['status'] == 'success'){
         this.dialog.showToast('Commentario eliminado',null,'success');
         this.utilArray.listDelete(this.listComments, comment.id );
         //this.teamService.listDelete(team.id);
       }
     });
   }

   cancelEdit(comment){
    comment.edit = false;
    this.commentEdit = {};
   }

   async editComment(){
     console.log('edit comment api');
     this.updatingComment = true;
     //await this.util.delay(5000);
     this.commentEdit['body'] = this.commentEdit['body'].trim();
      this.commentModel.api_update(this.commentEdit).subscribe(
        response => {
          if(response['status'] == 'success'){
            this.commentEdit['edit'] = false;
            this.utilArray.listUpdate( this.listComments , this.commentEdit['id'] , this.commentEdit);

          }
          this.updatingComment = false;
        },
        error => {
          console.log(error);
          this.updatingComment = false;
        }
      )
   }

}
