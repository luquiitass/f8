import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminGamePageRoutingModule } from './admin-game-routing.module';

import { AdminGamePage } from './admin-game.page';
import {ComponentsModule} from '../../../components/components.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminGamePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminGamePage]
})
export class AdminGamePageModule {}
