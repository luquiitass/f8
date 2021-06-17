import { Component, OnInit, Input } from '@angular/core';
import { PathsImagesService } from 'src/app/services/paths-images.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
})
export class LikesComponent implements OnInit {

  @Input('likes') likes = []

  constructor(
    public pathImages : PathsImagesService
  ) { }

  ngOnInit() {}

  init(){

  }

}
