import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {


  @Input('game') game;
  @Input('withDate') withDate = false;

  constructor(
    public util : UtilService
  ) { }

  ngOnInit() {}

}
