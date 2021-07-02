import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';
import {ComponentsModule} from '../../../components/components.module';


import { ResultsPage } from './results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ResultsPage]
})
export class ResultsPageModule {}
