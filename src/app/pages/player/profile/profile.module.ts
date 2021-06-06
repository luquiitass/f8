import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {ComponentsModule} from '../../../components/components.module'
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    ComponentsModule,
    NgxIonicImageViewerModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
