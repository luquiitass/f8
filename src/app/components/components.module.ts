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
import {RouterModule} from '@angular/router'

import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';



@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    RouterModule
  ],
  declarations: [
    ListComponent,
    EventListComponent,
    PlayerListComponent,
    CommentsComponent,
    NotificatioSelectedComponent,
    RedListComponent,
    SearchComponent
  ],
  exports: [
    ListComponent,
    EventListComponent,
    PlayerListComponent,
    CommentsComponent,
    NotificatioSelectedComponent,
    RedListComponent,
    SearchComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}