import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-canvas',
    templateUrl: 'canvas.component.html',
    styleUrls: ['canvas.component.css']
})
export class CanvasComponent {
    @ViewChild('canvas') public canvas: ElementRef;

    constructor() {
    }
}
