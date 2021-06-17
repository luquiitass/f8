import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { UtilService } from 'src/app/services/util.service';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { ActivatedRoute } from '@angular/router';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { UtilArrayService } from 'src/app/services/util-array.service';
import { PathsImagesService } from 'src/app/services/paths-images.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
  providers : [NavParams]
})
export class PublicationPage implements OnInit {

  public id : any;
  public segment = 'comments'
  public publication : any ;
  public publicationModel : Model;
  public isModal = true;

  constructor(
    public request : RequestService,
    public navParams: NavParams,
    public util : UtilService,
    public utilArray : UtilArrayService,
    public viewCtrl : ModalController,
    public transferData : TransferDataService,    
    public route : ActivatedRoute,
    public navCtrl : NavController,
    public authUser : AuthUserService,
    public pathImages : PathsImagesService


  ) { 
    this.publicationModel = new Model('Publication',request)
    
    this.id =  this.navParams.get('id');
    this.segment =  this.navParams.get('segment');

    

  }

  async ngOnInit() {

    //if(await this.navParams.get('id')){
     
  
      //await this.util.delay(500)
    
      if(!this.id){
        this.isModal =  false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.segment = this.route.snapshot.paramMap.get('segment') == 'likes' ? 'likes' :'comments';

      }


    this.init();
  }


  init($event = null){
    this.publicationModel.api_functionModel(this.id,'pageShow').subscribe(
      response => {
        console.log(response);

        this.publication = response['data'];

        if($event)
          $event.target.complete();
      }
    )
  }


  close(){
    this.publication.comments_count = this.publication.comments.length;
    this.publication.likes_count = this.publication.likes.length;

    this.viewCtrl.dismiss(
      {
        publication : this.publication,
      }
    );
  }

  segmentChanged($event){
    console.log('Segment changed', $event);
    this.segment = $event.detail.value;
  }

  updateComments($event,publication){
    publication.comments = $event;
  }

}
