import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerSearchPageRoutingModule } from './player-search-routing.module';

import { PlayerSearchPage } from './player-search.page';
import {ComponentsModule} from '../../../components/components.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerSearchPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PlayerSearchPage]
})
export class PlayerSearchPageModule {}
