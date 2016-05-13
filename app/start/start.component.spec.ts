import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import {TestComponentBuilder} from '@angular/compiler/testing';

import {StartComponent} from './start.component';

describe('StartComponent', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [StartComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the start component',
    inject([StartComponent], (component: StartComponent) => {
      expect(component).toBeTruthy();
    })
  );

  it('should have start button text of "Play"',
    inject([StartComponent], (component: StartComponent) => {
      component.ngOnInit();
      
      expect(component.startButtonText).toEqual('Play');
    })
  );

});
