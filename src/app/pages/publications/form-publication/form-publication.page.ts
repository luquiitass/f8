import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/api/request.service';
import { DialogService } from 'src/app/api/util/dialog.service';
import { ModalController, NavParams } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { Model } from 'src/app/api/models/model';
import { ModelImage } from 'src/app/api/models/modelImage';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-form-publication',
  templateUrl: './form-publication.page.html',
  styleUrls: ['./form-publication.page.scss'],
})
export class FormPublicationPage implements OnInit {

  public id: any;
  public publication : any;
  public servicePublication : Model;
  public photoModel : ModelImage;
  public user : any;
  public posting = false;

  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public viewCtrl: ModalController,
    public photoService : PhotoService,
    navParams: NavParams,
    public authUser : AuthUserService
  ) {

    this.photoModel = new ModelImage(request,viewCtrl);
    this.photoModel.setAspectRatioCrop('none');
    this.servicePublication = new Model('Publication',request);
    //this.serviceTeam.setModel('Team');

    this.id = navParams.get('id') ;
    
   }

  async ngOnInit() {
    this.user = this.authUser.user //await this.authUser.getUser();
    this.initObject();
  }

  initObject(){
    this.publication = { 
      text : '',
      user_id : this.user.id
    };

    if(this.id){
      this.servicePublication.api_find(this.id).subscribe(data => {
        if(data['status'] == 'success'){
          this.publication = data['Publication'];
        }
      })
    }
  }


  submit(){

    if(this.photoModel.isLoadPthoto()){
      this.publication.image = this.photoModel.image;
    }

    this.posting = true;
    if(this.publication.id){
      this.servicePublication.api_update(this.publication).subscribe(
        data => {
          if(data['status'] == 'success'){
            this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
            console.log(data);
            this.dismiss(data['Publication'])
          }
          this.posting = false;
        },
        error => {
          this.posting = false;
        });

    }else{
      this.servicePublication.api_create(this.publication).subscribe(
        data => {
          if(data['status'] == 'success'){
            this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
            this.dismiss(data['Publication'])
          }
          this.posting = false;

        },
        error => {
          this.posting = false;

        })
    }
  }

  dismiss(publication) {
    this.viewCtrl.dismiss(
      {
        publication : publication,
      }
    );
  }

  close(){
    this.viewCtrl.dismiss();
  }

  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day == 6 ;
  }

  print(){
    console.log(this.publication);
  }


}
