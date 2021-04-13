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
  public list = [];
  public tabs = []
  public tabSelected :any;
  public lastFocusSegment : any;

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
    /*this.modelGame.api_function('games').subscribe(data => {
      if(data['status'] = 'success'){
        this.list = data['data'];
        if(event)
          event.target.complete();
      }
    })
    */
    this.modelGame.api_function('pageHomeGames').subscribe(
      response => {
        if(response['status'] == 'success'){
          this.tabs = response['data']['dates'];
          this.selectFirst();
        }
        if(event)
          event.target.complete()
        console.log(response)
      },
      error => {
        event.target.complete()
        console.error(error)
      }
    )

  }

  async selectFirst(){
    if(this.tabs.length > 0){
      let tab = this.tabs[0];
      this.list = tab['results']
      this.tabSelected = 0
      await this.delay( 1500 )
      this.focusSegment()
      //this.selectDate(tab['date']);
    }
  }

  selectDate(event){
    let index = parseInt( event.detail.value );

    let tab = this.tabs[index];

    if(tab && tab['results']){
      this.list = tab['results']
      this.focusSegment()
      return;
    }
    this.modelGame.api_function('gamesByDate',{'date' : tab['date']}).subscribe(
      response => {
        if(response['status'] == 'success'){
          this.tabs[index]['results'] = response['data']
          this.list = this.tabs[index]['results'];
          this.focusSegment()
        }
        console.log(response);
      },
      error => {
        console.error(error);
      }
    )

  }

  focusSegment() {
    let segmentId = 'sgm_' + this.tabSelected;
    console.log('select segment : ', segmentId)
    document.getElementById(segmentId).scrollIntoView({ 
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
