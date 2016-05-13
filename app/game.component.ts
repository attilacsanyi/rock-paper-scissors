import {Component, OnInit} from '@angular/core';

declare var __moduleName: string;
@Component({
  moduleId: __moduleName,
  selector: 'iii-game',
  templateUrl: 'game.component.html',
})
export class GameComponent implements OnInit {
  gameTitle: string = 'rock paper scissors';

  constructor() { }

  ngOnInit() { }
}