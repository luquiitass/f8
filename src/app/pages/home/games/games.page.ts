import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  public modelGame  : Model;
  public list : any = [];

  constructor(
    public request : RequestService,
    public util : UtilService
  ) {
    this.modelGame = new Model('Game',request);

   }

  ngOnInit() {
    this.init();
  }

  init(event = null){
    this.modelGame.api_function('games').subscribe(data => {
      if(data['status'] = 'success'){
        this.list = data['data'];
        if(event)
          event.target.complete();
      }
    })
  }

}
