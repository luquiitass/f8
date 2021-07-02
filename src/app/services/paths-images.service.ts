import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathsImagesService {

  public images = {
    'profile_user' : '/assets/images/profile.jpg',
    'escudo' : '/assets/images/escudo.png',
    'team' : '/assets/images/shield_team.png',
    'player' : '/assets/images/jugador.png'
  };
  
  constructor() { }



}
