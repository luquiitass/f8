import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {


  playerModel : Model
  players = []
  firstLoading = true;

  constructor(
    public request : RequestService,
    public navCtrl : NavController,
    public util : UtilService

  ) {
    this.playerModel = new Model('Player',this.request);
  }

  ngOnInit() {
    this.load()
  }

  async load($event = null){

    //await this.util.delay(4000)
    this.playerModel.api_function('pageHomePlayers').subscribe(
      response => {
        if(response['status'] == 'success'){
          this.players = response['data']
        }
        console.log(response)
        this.firstLoading = false;
        if($event)
          $event.target.complete();
      },
      error => {
        this.firstLoading= false;
        console.error(error)
        if($event)
          $event.target.complete();
      }
    )
  }


  playerSelect(player){
    console.log('goTo',player)
    this.navCtrl.navigateForward(`player/profile/${player.id}`);
  
 }


}
