import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { ModalController } from '@ionic/angular';
import { DialogService } from 'src/app/api/util/dialog.service';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  public teams = [];
  public teamService : Model;

  public listSkeleton = new Array(10)
  public firstLoad = true;

  constructor(
    public request : RequestService,
    public modalController: ModalController,
    public dialog : DialogService,
    public auth : AuthUserService
  ) {
    this.teamService = new Model('Team',request);
   }

  ngOnInit() {

    this.init();
  }

  init(event = null){
    this.teamService.api_function('pageHomeTeams').subscribe(
      response => {
        this.teams = response['data'];
        if(event)
          event.target.complete();
        this.firstLoad = false
      },
      error => {
        if(event)
          event.target.complete();
        this.firstLoad = false;
      }
    )
  }

  close(){
    this.auth.logout();
  }

}
