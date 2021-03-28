import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeEventFormPageRoutingModule } from './type-event-form-routing.module';

import { TypeEventFormPage } from './type-event-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeEventFormPageRoutingModule
  ],
  declarations: [TypeEventFormPage]
})
export class TypeEventFormPageModule {}
