import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

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
    this.modelGame.api_function('results').subscribe(data => {
      if(data['status'] = 'success'){
        this.list = data['data'];
        if(event)
          event.target.complete();
      }
    })
  }
}
