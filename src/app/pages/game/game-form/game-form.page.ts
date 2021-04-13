import { Component, OnInit } from '@angular/core';

import {RequestService} from '../../../api/request.service';
import { ModalController, NavParams } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { Model } from 'src/app/api/models/model';
import { DialogService } from 'src/app/api/util/dialog.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.page.html',
  styleUrls: ['./game-form.page.scss'],
})
export class GameFormPage implements OnInit {

  public teams = [];
  public game : any;
  public numbGoals = []
  public id : any;
  public customDayShortNames = ['s\u00f8n'];
  public status = ['Pendiente','Suspendido','Jugado'];
  public toDate : any;

  public serviceGame : Model;
  public serviceTeam : Model;

  constructor(
    public request : RequestService,
    public dialogService : DialogService,
    public viewCtrl: ModalController,
    public photoService : PhotoService,
    navParams: NavParams,
  ) {
    this.serviceGame = new Model('Game',request);
    this.serviceTeam =  new Model('Team',request);
    //this.serviceTeam.setModel('Team');

    this.id = navParams.get('id') ;
    this.toDate = navParams.get('date') ?? new Date();
    console.log('date',this.toDate)
    
   }

  ngOnInit() {
    this.serviceTeam.api_function('getAllTeamsSelect').subscribe(data => {
      if(data['data']){
        this.teams = data['data']
        console.log('teams -> ' , this.teams)
        //this.serviceGame.setModel('Game');
      }
    });


    for (var i = 0; i <= 30; i++) {
      this.numbGoals.push(i);
    }
    this.initObject();
  }

  initObject(){
    this.game = { 
      l_team :'',
      v_team : '',
      l_goals : 0,
      v_goals : 0,
      time : '',
      date : this.toDate,
      location : '',
      description : '',
      status : 'Pendiente'
    };

    if(this.id){
      this.serviceGame.api_find(this.id).subscribe(data => {
        if(data['status'] == 'success'){
          this.game = data['Game'];
        }
      })
    }
  }


  submit(){
    if(this.game.id){
      this.serviceGame.api_update(this.game).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          console.log(data);
          this.dismiss(data['Game'])
        }
      });

    }else{
      this.serviceGame.api_create(this.game).subscribe(data => {
        if(data['status'] == 'success'){
          this.dialogService.showToast( data['msjSuccess'] ?? 'Registrado' );
          this.dismiss(data['Game'])
        }
    })
    }
  }

  dismiss(game) {
    this.viewCtrl.dismiss(
      {
        game : game,
      }
    );
  }

  close(){
    this.viewCtrl.dismiss();
  }

  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day == 6 ;
  }

  print(){
    console.log(this.game);
  }
}
