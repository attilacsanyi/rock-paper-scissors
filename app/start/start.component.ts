import {Component, OnInit} from '@angular/core';

declare var __moduleName: string;
@Component({
  moduleId: __moduleName,
  selector: 'iii-start',
  templateUrl: 'start.component.html',
})
export class StartComponent implements OnInit {
  startButtonText: string = 'Play';

  constructor() { }

  ngOnInit() { }
}