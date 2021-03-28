import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';
import { Model } from '../api/models/model';
import { RequestService } from '../api/request.service';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];

  public photo : any;
  public url :string ;
  public thumb : boolean ;
  public serviceImage : Model;
  public image : any ;
  public path : string;

  constructor(request : RequestService) { 
      this.serviceImage = new Model('Image',request);
  }

  public init(url : string, thumb : boolean = true,pathDefault = 'assets/images/pngwing.png'){
      this.url = url ?? '/images/';
      this.thumb = thumb ?? false ;
      this.path = pathDefault;
      this.photo = new Photo(pathDefault);
  }

  setImage(image){
    this.image = image;
    this.photo.image = image;
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });



    const base64Data = await this.readAsBase64(capturedPhoto);

  
    this.photos.unshift(new Photo(null,capturedPhoto.webPath, base64Data, this.url, this.thumb));
  }


  public async addOneNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
  
    const base64Data = await this.readAsBase64(capturedPhoto);

    this.photo = new Photo(capturedPhoto.webPath,base64Data, base64Data, this.url, this.thumb, this.image);

  
  }

  public isLoadPthoto() {
    return  this.photo.data? true : false;
  }

  private async readAsBase64(cameraPhoto: CameraPhoto) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
  
    return await this.convertBlobToBase64(blob) as string;  
  }
  
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });


  uploadImage(){
    if(this.isLoadPthoto()){
      if(this.photo.id){
        return this.serviceImage.api_update(this.photo);
      }else{
        return this.serviceImage.api_create(this.photo);
      }
    }
  }
}

export class Photo {
  id? : string;
  filepath: string;
  webviewPath: string;
  data :string;
  url : string;
  thumb : boolean;
  image ? :{}

  constructor(  filepath : string = "assets/images/pngwing.png",webviewPath : string = null,data :string = '',url : string = '',thumb : boolean = false , image : any = null){
    this.id = image ? image.id : '';
    this.webviewPath = webviewPath;
    this.filepath = filepath;
    this.data = data;
    this.url = url;
    this.thumb = thumb;
    this.image = image
  }

  getPath(){
    if(this.webviewPath){
      return this.webviewPath;
    }
    else if(this.image && this.image['urlComplete'] ){
      return this.image['urlComplete'];
    }else{
      return this.filepath;
    }
  }
}
