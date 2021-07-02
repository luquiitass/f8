import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamRequestToPlayerPageRoutingModule } from './team-request-to-player-routing.module';

import { TeamRequestToPlayerPage } from './team-request-to-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamRequestToPlayerPageRoutingModule
  ],
  declarations: [TeamRequestToPlayerPage]
})
export class TeamRequestToPlayerPageModule {}
