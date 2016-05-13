import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {By} from '@angular/platform-browser';

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

  it('should have proper title',
    inject([GameComponent], (component: GameComponent) => {
      expect(component.gameTitle).toEqual('rock paper scissors');
    })
  );

  it('should have expected <h1> text',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(GameComponent).then(fixture => {
        // fixture.detectChanges();  // would need to resolve a binding but we don't have a binding
        let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;
        h1 = fixture.debugElement.query(By.css('h1')).nativeElement;

        expect(h1.innerText).toEqual('Rock/Paper/Scissors Game (in progress...)');

      });

    })));

});
