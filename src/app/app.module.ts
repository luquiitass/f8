import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { HttpClientModule } from '@angular/common/http';

import { FormPageModule } from '../app/pages/team/form/form.module';
import { RequestService } from './api/request.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
//import {Storage} from '@ionic/storage'
import { from } from 'rxjs';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule, 
    FormPageModule,
    NgxIonicImageViewerModule,
    //Storage,
    //Storage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PhotoViewer,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
