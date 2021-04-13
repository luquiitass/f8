import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {ListComponent} from './event/list/list.component'
import {EventListComponent} from './event/event-list/event-list.component'
import {PlayerListComponent} from './player/player-list/player-list.component'
import {CommentsComponent} from './comments/comments.component'
import {NotificatioSelectedComponent} from './notifications/notificatio-selected/notificatio-selected.component'
import {RedListComponent} from './redes/red-list/red-list.component'; 

import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule
  ],
  declarations: [
    ListComponent,
    EventListComponent,
    PlayerListComponent,
    CommentsComponent,
    NotificatioSelectedComponent,
    RedListComponent
  ],
  exports: [
    ListComponent,
    EventListComponent,
    PlayerListComponent,
    CommentsComponent,
    NotificatioSelectedComponent,
    RedListComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}