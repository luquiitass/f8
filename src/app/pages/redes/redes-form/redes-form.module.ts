import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedesFormPageRoutingModule } from './redes-form-routing.module';

import { RedesFormPage } from './redes-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedesFormPageRoutingModule
  ],
  declarations: [RedesFormPage]
})
export class RedesFormPageModule {}
