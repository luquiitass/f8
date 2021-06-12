import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  @Input('notification') notification;

  public content : any ;

  constructor(
    public util : UtilService
  ) { }

  ngOnInit() {}


  ngOnChanges(changes: SimpleChanges) {
        
    let content : string = changes['notification']['currentValue']['content'];
    this.content = JSON.parse( content );
    
  }

}
