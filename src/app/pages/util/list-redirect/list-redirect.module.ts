import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRedirectPageRoutingModule } from './list-redirect-routing.module';

import { ListRedirectPage } from './list-redirect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRedirectPageRoutingModule
  ],
  declarations: [ListRedirectPage]
})
export class ListRedirectPageModule {}
