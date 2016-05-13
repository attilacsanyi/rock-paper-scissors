import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {By} from '@angular/platform-browser';

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
      expect(component.startButtonText).toEqual('Play');
    })
  );

  it('should have expected <h1> text of "Rock/Paper/Scissors Game (in progress...)"',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(StartComponent).then(fixture => {
        // fixture.detectChanges();  // would need to resolve a binding but we don't have a binding
        let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;
        h1 = fixture.debugElement.query(By.css('h1')).nativeElement;

        expect(h1.innerText).toEqual('Rock/Paper/Scissors Game (in progress...)');

      });

    })));

});
