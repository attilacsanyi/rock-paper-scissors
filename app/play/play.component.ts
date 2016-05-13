import {Component, OnInit} from '@angular/core';

import {Card} from '../common/models/card';
import {CardComponent} from '../common/components/card.component';

declare var __moduleName: string;
@Component({
  moduleId: __moduleName,
  selector: 'iii-play',
  templateUrl: 'play.component.html',
  directives: [CardComponent]
})
export class PlayComponent implements OnInit {

  public header: string = 'Choose your weapon!';
  public cards: Card[] = [Card.ROCK, Card.PAPER, Card.SCISSOR];

  constructor() { }

  ngOnInit() { }

  onClick(card: Card) {
    switch (card) {
      case Card.ROCK: console.log('rock'); break;
      case Card.PAPER: console.log('paper'); break;
      case Card.SCISSOR: console.log('scissors'); break;
      default: break;
    }
  }
}