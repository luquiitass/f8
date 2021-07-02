import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { IonItem } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PathsImagesService } from 'src/app/services/paths-images.service';
import { UtilPhotoService } from 'src/app/services/util-photo.service';

@Component({
  selector: 'app-team-request-to-player',
  templateUrl: './team-request-to-player.page.html',
  styleUrls: ['./team-request-to-player.page.scss'],
})
export class TeamRequestToPlayerPage implements OnInit {

  public id ;
  public passRequestModel : Model;
  public passRequest : any;


  constructor(
    public request : RequestService,
    public router : ActivatedRoute,
    public pathImages : PathsImagesService,
    public utilPhoto : UtilPhotoService
  ) {
    this.passRequestModel = new Model('PassRequest',request);
    this.id = this.router.snapshot.paramMap.get('id');


  }

  ngOnInit() {
    this.init()
  }

  init($event = null){
    this.passRequestModel.api_functionModel(this.id,'pageTeamRequestToPlayer').subscribe(
      response => {
        console.log(response);
        if(response['status'] == 'success')
          this.passRequest = response['data'];

        if($event)
          $event.target.complete();
      },
      error => {
        console.log(error)
        if($event)
          $event.target.complete();

      }
    )
  }

  accept(){
    this.passRequestModel.api_functionModel(this.id , 'accept').subscribe(
      response => {
        if(response['status'] == 'success')
          this.passRequest = response['data'];
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

  reject(){
    this.passRequestModel.api_functionModel(this.id , 'reject').subscribe(
      response => {
        if(response['status'] == 'success')
          this.passRequest = response['data'];
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

}
