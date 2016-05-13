import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

declare var __moduleName: string;
@Component({
  moduleId: __moduleName,
  selector: 'iii-start',
  templateUrl: 'start.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class StartComponent implements OnInit {
  startButtonText: string = 'Play';

  constructor() { }

  ngOnInit() { }
}