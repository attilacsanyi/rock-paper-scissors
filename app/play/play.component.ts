import {Component, OnInit} from '@angular/core';

import {Card} from '../common/models/card';
import {CardComponent} from '../common/components/card.component';

declare var __moduleName: string;
@Component({
  moduleId: __moduleName,
  selector: 'iii-play',
  templateUrl: 'play.component.html',
  styleUrls: ['play.component.css'],
  directives: [CardComponent]
})
export class PlayComponent implements OnInit {

  message: string;
  cards: Card[];
  selectedCardId: Card;
  randomCardId: Card;
  restartButtonText: string;

  constructor() { }

  ngOnInit() {
    this.message = 'Choose your weapon!';
    this.cards = [Card.ROCK, Card.PAPER, Card.SCISSORS];
    this.restartButtonText = 'Restart';
  }

  onClick(card: Card) {
    switch (card) {
      case Card.ROCK: this.selectedCardId = Card.ROCK; break;
      case Card.PAPER: this.selectedCardId = Card.PAPER; break;
      case Card.SCISSORS: this.selectedCardId = Card.SCISSORS; break;
      default: break;
    }
    this.pickRandomCard();
  }

  canSelect() {
    return !this.selectedCardId || this.selectedCardId === this.randomCardId;
  }

  restart() {
    this.selectedCardId = undefined;
  }

  getMessage() {
    if (!this.selectedCardId) {
      return this.message;
    } else {
      let res = this.evaluate(this.selectedCardId, this.randomCardId);
      return (res === 0) ? 'Tie. Choose again!' : (res === 1) ? 'You won. Play again?' : 'You lost. Play again?';
    }
  }

  /*
   * Evaluate cards.
   * return 1 if card1 is stronger otherwise -1 or zero in case of tie
   */
  private evaluate(card1: Card, card2: Card) {
    if (card1 === card2) {
      return 0;
    } else {
      switch (card1) {
        case Card.ROCK: return (card2 == Card.SCISSORS) ? 1 : -1;
        case Card.PAPER: return (card2 == Card.ROCK) ? 1 : -1;
        case Card.SCISSORS: return (card2 == Card.PAPER) ? 1 : -1;
        default: return -1;
      }
    }
  }

  private pickRandomCard() {
    this.randomCardId = this.getRandomCardId(this.cards.length);
  }

  private getRandomCardId(max: number) {
    return Math.floor((Math.random() * max) + 1);
  }
}