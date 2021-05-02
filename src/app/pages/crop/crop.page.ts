import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.page.html',
  styleUrls: ['./crop.page.scss'],
})
export class CropPage implements OnInit {

  imageChangedEvent: any = 'assets/images/pngwing.png';
  croppedImage: any = '';
  imageBase64 : any = '';
  img : any = '';
  ar : any = "1 / 1";

  constructor(
    navParams: NavParams,
    public viewCtrl: ModalController,


  ) { 
    this.imageBase64 = navParams.get('base64');
    this.img = navParams.get('img');
    this.ar = navParams.get('aspectRatio');
    console.log(this);
  }

  ngOnInit() {
  }

  fileChangeEvent(event: any): void {
    console.log(event);
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded(image: HTMLImageElement = null) {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

  save(){
    this.viewCtrl.dismiss(
      {
        base64 : this.croppedImage,
      }
    );
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
