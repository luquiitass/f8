import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { DialogService } from 'src/app/api/util/dialog.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-team-request',
  templateUrl: './team-request.page.html',
  styleUrls: ['./team-request.page.scss'],
})
export class TeamRequestPage implements OnInit {

  public player_id;
  public team_id;

  public team :any;
  public player : any;

  public passRequestModel : Model;
  public sending = false;
  public tryCount = 1;


  constructor(
    public route : ActivatedRoute,
    public router : Router,
    public navController : NavController,
    public request : RequestService,
    public utilDialog : DialogService

  ) { 

    this.passRequestModel = new Model('PassRequest',request);

    this.team_id = this.route.snapshot.paramMap.get('team_id');
    this.player_id = this.route.snapshot.paramMap.get('player_id');

  }

  ngOnInit() {
    this.init();
  }

  init(event = null){
    this.passRequestModel.api_function('passTeamPage',{team_id:this.team_id,player_id:this.player_id}).subscribe(
      response => {

        if(response['status'] == 'success'){
          this.team = response['data']['team'];
          this.player = response['data']['player']
        }

        console.log(response);
        if(event)
          event.target.complete();
      },
      error => {
        console.error(error)
        if(event)
          event.target.complete();
      }
    );
  }

  send() {
    this.sending = true;

    let parms = {
      team_id : this.team.id,
      player_id : this.player.id,
      status : 'Pendiente',
      try : this.tryCount
    }

    this.passRequestModel.api_create(parms).subscribe(
      response => {

        if(response['status'] == 'success'){
          this.utilDialog.showToast('Solicitud Enviada',null,'info',777);
          this.navController.back();
        }
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )

  }

}
