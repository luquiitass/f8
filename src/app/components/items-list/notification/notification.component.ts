import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { PathsImagesService } from 'src/app/services/paths-images.service';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { UtilPhotoService } from 'src/app/services/util-photo.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  @Input('notification') notification;

  public content : any = {} ;

  constructor(
    public util : UtilService,
    public pathImages : PathsImagesService,
    public authUser : AuthUserService,
    public utilPhoto : UtilPhotoService
  ) { }

  ngOnInit() {}


  ngOnChanges(changes: SimpleChanges) {
        
    //let content : string = changes['notification']['currentValue']['content'];
    //this.content = JSON.parse( content );
    
  }

}
