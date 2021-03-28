import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public id : any;
  public platerModel : Model;
  private player : any;


  constructor(
    public request : RequestService,
    public route : ActivatedRoute
  ) { 
    this.platerModel = new Model('Player',request)
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.init()
  }

  init(){
    this.platerModel.api_functionModel(this.id,'profile').subscribe(
      response => {
        if(response['status'] == 'success'){
          this.player = response['data']
          console.log('player',this.player)
        }
      },
      error => {

      }
    )
  }
  getPhoto(){
    if(this.player && this.player.photo)
      return this.player.photo.urlComplete;
    return 'assets/images/jugador.png' 
  }

  getYears(date){
    return moment().diff(date, 'years')
  }

}
