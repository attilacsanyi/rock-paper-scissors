import {Component, Input, OnInit} from '@angular/core';

import {Card} from '../models/card';

declare var __moduleName: string;
@Component({
    moduleId: __moduleName,
    selector: 'iii-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {
    @Input() cardId: number;
    @Input() bigCard: boolean = false;

    public cardName: string = 'Unknown';
    public cardSize: number;

    ngOnInit() {
        let cardName = Card[this.cardId];
        if (cardName) {
            this.cardName = cardName;
        }

        this.cardSize = (this.bigCard) ? 140 : 60;
    }

}