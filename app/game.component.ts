import {Component, OnInit} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

import {StartComponent} from './start/start.component';
import {PlayComponent} from './play/play.component';

declare var __moduleName: string;
@Component({
  moduleId: __moduleName,
  selector: 'iii-game',
  templateUrl: 'game.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/', name: 'Start', component: StartComponent, useAsDefault: true },
  { path: '/play', name: 'Play', component: PlayComponent }
])
export class GameComponent implements OnInit {
  gameTitle: string = 'rock paper scissors';

  constructor() { }

  ngOnInit() { }
}