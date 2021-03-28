import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {ListComponent} from './event/list/list.component'
import {EventListComponent} from './event/event-list/event-list.component'
import {PlayerListComponent} from './player/player-list/player-list.component'




@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    ListComponent,
    EventListComponent,
    PlayerListComponent
  ],
  exports: [
    ListComponent,
    EventListComponent,
    PlayerListComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}