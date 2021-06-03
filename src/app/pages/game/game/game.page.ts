import { Component, OnInit } from '@angular/core';

import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { UtilService } from 'src/app/services/util.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss','../../home/games/games.page.scss'],
})
export class GamePage implements OnInit {

  public id : any;
  public gameModel : Model;
  public game : any ;

  constructor(
    public route : ActivatedRoute,
    public requesService : RequestService,
    public util : UtilService

  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.gameModel = new Model('Game',requesService);

   }

  ngOnInit() {
    this.init();
  }

  init(event = null){
    this.gameModel.api_functionModel(this.id,'dataProfile').subscribe(data => {
      if(data['status'] == 'success')
        this.game = data['data'];
        if(event)
          event.target.complete();
    })
  }

}
