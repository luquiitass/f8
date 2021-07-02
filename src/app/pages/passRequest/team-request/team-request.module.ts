import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamRequestPageRoutingModule } from './team-request-routing.module';

import { TeamRequestPage } from './team-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamRequestPageRoutingModule
  ],
  declarations: [TeamRequestPage]
})
export class TeamRequestPageModule {}
