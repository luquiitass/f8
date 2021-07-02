import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { UtilPhotoService } from 'src/app/services/util-photo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public id : any ;

  private user : any;
  private userModel : Model;

  constructor(
    public route : ActivatedRoute,
    private request : RequestService,
    private utilPhoto : UtilPhotoService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.userModel = new Model('User' , request );
   }

  ngOnInit() {
    this.init();
  }


  init($event = null){
    this.userModel.api_functionModel(this.id , 'profilePage').subscribe(
      response => {
        if(response['status'] == 'success'){
          this.user = response['data'];
        }

        if($event)
          $event.target.complete();
        console.log(response);
      },
      error => {
        if($event)
          $event.target.complete();
        console.log(error)
      }
    )

  }

}
