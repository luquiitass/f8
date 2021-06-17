import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { PathsImagesService } from 'src/app/services/paths-images.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss'],
})
export class MenuUserComponent implements OnInit {



  constructor(
    public authUser : AuthUserService,
    public pathImages : PathsImagesService
  ) { 

    

  }

  async ngOnInit() {
    //await this.authUser.getUser();
    console.log('user auth',this.authUser.user)
  }

}
