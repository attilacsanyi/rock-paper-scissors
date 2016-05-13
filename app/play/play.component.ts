import {Component, OnInit} from '@angular/core';

declare var __moduleName: string;
@Component({
  moduleId: __moduleName,
  selector: 'iii-play',
  templateUrl: 'play.component.html',
})
export class PlayComponent implements OnInit {
  header: string = 'Choose your weapon!';

  constructor() { }

  ngOnInit() { }
}