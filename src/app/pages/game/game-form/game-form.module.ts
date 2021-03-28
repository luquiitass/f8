import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameFormPageRoutingModule } from './game-form-routing.module';

import { GameFormPage } from './game-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameFormPageRoutingModule
  ],
  declarations: [GameFormPage]
})
export class GameFormPageModule {}
