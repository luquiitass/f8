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

  public teamService : Model;

  constructor(
    public request : RequestService,
    public modalController: ModalController,
    public dialog : DialogService,
    public auth : AuthUserService
  ) {
    this.teamService = new Model('Team',request);
   }

  ngOnInit() {
    console.log('load all Teams ')
    this.teamService.api_all();
  }

  close(){
    this.auth.logout();
  }

}
