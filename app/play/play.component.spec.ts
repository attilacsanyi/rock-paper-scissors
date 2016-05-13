import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import {TestComponentBuilder} from '@angular/compiler/testing';

import {PlayComponent} from './play.component';
import {Card} from '../common/models/card';

describe('PlayComponent', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PlayComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the play component',
    inject([PlayComponent], (component: PlayComponent) => {
      expect(component).toBeTruthy();
    })
  );

  it('should have header of "Choose your weapon!"',
    inject([PlayComponent], (component: PlayComponent) => {
      component.ngOnInit();

      expect(component.message).toEqual('Choose your weapon!');
    })
  );

  it('should have 3 cards of "rock, paper, scissors"',
    inject([PlayComponent], (component: PlayComponent) => {
      component.ngOnInit();

      expect(component.cards).toEqual([Card.ROCK, Card.PAPER, Card.SCISSORS]);
    })
  );

  it('should have no selected card id in the beginning',
    inject([PlayComponent], (component: PlayComponent) => {

      expect(component.selectedCardId).toEqual(undefined);
    })
  );

  it('should have selected SCISSORS after click on that card',
    inject([PlayComponent], (component: PlayComponent) => {
      component.ngOnInit();
      component.onClick(Card.SCISSORS);

      expect(component.selectedCardId).toEqual(Card.SCISSORS);
    })
  );

  it('should have no random card id in the beginning',
    inject([PlayComponent], (component: PlayComponent) => {
      expect(component.randomCardId).toEqual(undefined);
    })
  );

  it('should have selected random card id after selected PAPER by user',
    inject([PlayComponent], (component: PlayComponent) => {
      component.ngOnInit();
      component.onClick(Card.PAPER);

      expect(component.randomCardId).not.toEqual(undefined);
    })
  );

  it('should have selected random card id less than or equal with num of cards, after selected ROCK by user',
    inject([PlayComponent], (component: PlayComponent) => {
      component.ngOnInit();
      component.onClick(Card.ROCK);

      expect(component.randomCardId).toBeLessThan(component.cards.length + 1);
    })
  );

  describe('canSelect()', () => {

    it('user can select in the beginning of the game',
      inject([PlayComponent], (component: PlayComponent) => {
        component.ngOnInit();

        expect(component.canSelect()).toEqual(true);
      })
    );

    it('user can select if it was tie',
      inject([PlayComponent], (component: PlayComponent) => {
        component.ngOnInit();
        component.selectedCardId = component.randomCardId = Card.PAPER;

        expect(component.canSelect()).toEqual(true);
      })
    );

    it('user can not select if selected was PAPER, but reandom was SCISSORS',
      inject([PlayComponent], (component: PlayComponent) => {
        component.ngOnInit();
        component.selectedCardId = Card.PAPER;
        component.randomCardId = Card.SCISSORS;

        expect(component.canSelect()).toEqual(false);
      })
    );

  });

  it('should have restart button text of "Restart"',
    inject([PlayComponent], (component: PlayComponent) => {
      component.ngOnInit();

      expect(component.restartButtonText).toEqual('Restart');
    })
  );

  describe('restart()', () => {

    it('user can restart the game which clear the selected card id',
      inject([PlayComponent], (component: PlayComponent) => {
        component.ngOnInit();
        component.onClick(Card.PAPER);
        component.restart();

        expect(component.selectedCardId).toEqual(undefined);
      })
    );

  });

});
