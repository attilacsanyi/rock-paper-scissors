import {Component} from '@angular/core';
import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {By} from '@angular/platform-browser';

import {CardComponent} from './card.component';

describe('CardComponent', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [CardComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the card component',
    inject([CardComponent], (component: CardComponent) => {
      expect(component).toBeTruthy();
    })
  );

  it('should have default cardname of "Unknown"',
    inject([CardComponent], (component: CardComponent) => {
      expect(component.cardName).toEqual('Unknown');
    })
  );

  it('should have default bigCard false',
    inject([CardComponent], (component: CardComponent) => {
      expect(component.bigCard).toEqual(false);
    })
  );

  it('should have default card size 60',
    inject([CardComponent], (component: CardComponent) => {
      component.ngOnInit();

      expect(component.cardSize).toEqual(60);
    })
  );

  it('should have card name of "PAPER" for id 1', inject([], () => {
    return builder.createAsync(BigPaperCardComponentTest)
      .then((fixture: ComponentFixture<any>) => {
        fixture.detectChanges();
        let component = fixture.debugElement.query(By.directive(CardComponent)).componentInstance;
        component.ngOnInit();

        expect(component.cardName).toEqual('PAPER');
      });
  }));

  it('should have card size 140 of big PAPER', inject([], () => {
    return builder.createAsync(BigPaperCardComponentTest)
      .then((fixture: ComponentFixture<any>) => {
        fixture.detectChanges();
        let component = fixture.debugElement.query(By.directive(CardComponent)).componentInstance;
        component.ngOnInit();

        expect(component.cardSize).toEqual(140);
      });
  }));

  @Component({
    selector: 'iii-card-test',
    template: '<iii-card cardId="1" bigCard="true"></iii-card>',
    directives: [CardComponent]
  })
  class BigPaperCardComponentTest { }

});
