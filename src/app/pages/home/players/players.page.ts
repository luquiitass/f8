import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {


  playerModel : Model
  players : []

  constructor(
    public request : RequestService
  ) {
    this.playerModel = new Model('Player',this.request);
  }

  ngOnInit() {
    this.load()
  }

  load(){
    this.playerModel.api_function('pageHomePlayers').subscribe(
      response => {
        if(response['status'] == 'success'){
          this.players = response['data']
        }
        console.log(response)
      },
      error => {
        console.error(error)
      }
    )
  }

}
