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

  header: string;
  cards: Card[];
  selectedCardId: number;

  constructor() { }

  ngOnInit() {
    this.header = 'Choose your weapon!';
    this.cards = [Card.ROCK, Card.PAPER, Card.SCISSORS];
  }

  onClick(card: Card) {
    switch (card) {
      case Card.ROCK: this.selectedCardId = Card.ROCK; break;
      case Card.PAPER: this.selectedCardId = Card.PAPER; break;
      case Card.SCISSORS: this.selectedCardId = Card.SCISSORS; break;
      default: break;
    }
  }
}