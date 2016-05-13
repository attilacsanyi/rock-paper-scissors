

import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import {TestComponentBuilder} from '@angular/compiler/testing';
import {By} from '@angular/platform-browser';

import {GameComponent} from './game.component';

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('GameComponent', function () {

  it('should instantiate game component',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      tcb.createAsync(GameComponent).then(fixture => {
        
        expect(fixture.componentInstance instanceof GameComponent).toBe(true, 'should create GameComponent');
        
      });
    })));

  it('should have expected <h1> text',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(GameComponent).then(fixture => {
        let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;
        h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
        
        expect(h1.innerText).toEqual('Rock/Paper/Scissors Game (in progress...)');
        
      });

    })));
});