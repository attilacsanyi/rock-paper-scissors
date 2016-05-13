import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import {TestComponentBuilder} from '@angular/compiler/testing';

import {GameComponent} from './game.component';

describe('GameComponent', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [GameComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the game component',
    inject([GameComponent], (component: GameComponent) => {
      expect(component).toBeTruthy();
    })
  );

  it('should have game title of "rock paper scissors"',
    inject([GameComponent], (component: GameComponent) => {
      expect(component.gameTitle).toEqual('rock paper scissors');
    })
  );

});
