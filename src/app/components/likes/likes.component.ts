import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
})
export class LikesComponent implements OnInit {

  @Input('likes') likes = []

  constructor() { }

  ngOnInit() {}

  init(){

  }

}
