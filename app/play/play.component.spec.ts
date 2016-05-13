import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {By} from '@angular/platform-browser';

import {PlayComponent} from './play.component';

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

});
