import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public id : any ;

  constructor(
    public route : ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
