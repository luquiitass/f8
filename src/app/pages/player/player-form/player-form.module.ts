import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerFormPageRoutingModule } from './player-form-routing.module';

import { PlayerFormPage } from './player-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerFormPageRoutingModule
  ],
  declarations: [PlayerFormPage]
})
export class PlayerFormPageModule {}
