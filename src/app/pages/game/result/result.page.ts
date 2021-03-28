import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/api/models/model';
import { RequestService } from 'src/app/api/request.service';
import { IonItem } from '@ionic/angular';


@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss','../../home/results/results.page.scss'],
})
export class ResultPage implements OnInit {

  public id : any;
  public resultModel : Model;
  public game : any ;

  constructor(
    public route : ActivatedRoute,
    public requesService : RequestService

  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.resultModel = new Model('Game',requesService);

   }

  ngOnInit() {
    this.init();
  }

  init(event = null){
    this.resultModel.api_functionModel(this.id,'dataProfile').subscribe(data => {
      if(data['status'] == 'success')
        this.game = data['data'];
        if(event)
          event.target.complete();
    })
  }

}
