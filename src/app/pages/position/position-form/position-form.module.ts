import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PositionFormPageRoutingModule } from './position-form-routing.module';

import { PositionFormPage } from './position-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PositionFormPageRoutingModule
  ],
  declarations: [PositionFormPage]
})
export class PositionFormPageModule {}
