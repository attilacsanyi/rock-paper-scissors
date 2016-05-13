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
      expect(component.header).toEqual('Choose your weapon!');
    })
  );

  it('should have 3 cards of "rock, paper, scissors"',
    inject([PlayComponent], (component: PlayComponent) => {
      expect(component.cards).toEqual([Card.ROCK, Card.PAPER, Card.SCISSOR]);
    })
  );

});
