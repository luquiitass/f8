import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/api/models/model';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/api/request.service';
import { UtilService } from 'src/app/services/util.service';
import { ModalController } from '@ionic/angular';
import { EventFormPage } from '../../event/event-form/event-form.page';

@Component({
  selector: 'app-admin-game',
  templateUrl: './admin-game.page.html',
  styleUrls: ['./admin-game.page.scss'],
})
export class AdminGamePage implements OnInit {

  public id : any;
  public gameModel : Model;
  public game : any = [] ;

  constructor(
    public route : ActivatedRoute,
    public requesService : RequestService,
    public util : UtilService,
    public modalController: ModalController,


  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.gameModel = new Model('Game',requesService);
    console.log('id',this.id);

   }

  ngOnInit() {
    this.init();
  }

  init(event = null){
    this.gameModel.api_find(this.id).subscribe(data => {
      if(data['status'] == 'success')
        this.game = data['Game'];
        if(event)
          event.target.complete();
    })
  }

  async addEvent() {
    const modal = await this.modalController.create({
      component: EventFormPage ,
      componentProps: { game_id: this.game.id }

    });

    modal.onDidDismiss().then(data=>{
      const event = data.data['event'];
      console.log(event);
      this.game['events'].push(event);
    })

    return await modal.present();
   }

}
