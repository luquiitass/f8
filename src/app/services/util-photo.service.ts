import { Injectable } from '@angular/core';
import { PathsImagesService } from './paths-images.service';

@Injectable({
  providedIn: 'root'
})
export class UtilPhotoService {

  constructor(
    public pathImages : PathsImagesService
  ) { }




  getPhotoPlayer(player , thumb = false){
    return  player && player.photo ?  thumb ? player.photo.urlCompleteThumb : player.photo.urlComplete : this.pathImages.images.player; 
  }

  getPhotoUser(user , thumb = false){
    return  user && user.photo ?  (thumb ? user.photo.urlCompleteThumb : user.photo.urlComplete) : this.pathImages.images.profile_user; 
  }

}
