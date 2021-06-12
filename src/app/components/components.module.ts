import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {ListComponent} from './event/list/list.component'
import {EventListComponent} from './event/event-list/event-list.component'
import {PlayerListComponent} from './player/player-list/player-list.component'
import {CommentsComponent} from './comments/comments.component'
import {NotificatioSelectedComponent} from './notifications/notificatio-selected/notificatio-selected.component'
import {RedListComponent} from './redes/red-list/red-list.component'; 
import {SearchComponent} from './search/search.component';
import {RouterModule} from '@angular/router';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { LikesComponent} from './likes/likes.component'
import {MenuUserComponent} from './menu-user/menu-user.component'
import {NotificationComponent} from './items-list/notification/notification.component';




import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';



@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    RouterModule,
    NgxIonicImageViewerModule
    ],
  declarations: [
    ListComponent,
    EventListComponent,
    PlayerListComponent,
    CommentsComponent,
    NotificatioSelectedComponent,
    RedListComponent,
    SearchComponent,
    LikesComponent,
    MenuUserComponent,
    NotificationComponent
  ],
  exports: [
    ListComponent,
    EventListComponent,
    PlayerListComponent,
    CommentsComponent,
    NotificatioSelectedComponent,
    RedListComponent,
    SearchComponent,
    LikesComponent,
    MenuUserComponent,
    NotificationComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}