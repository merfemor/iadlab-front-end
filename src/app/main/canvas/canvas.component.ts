import {Component} from '@angular/core';

@Component({
    selector: 'app-canvas',
    templateUrl: 'canvas.component.html',
    styleUrls: ['canvas.component.css']
})
export class CanvasComponent {
    public width = 400;
    public xpxPerCell = this.width / 16.;
    public height = 400;
    public ypxPerCell = this.height / 16.;
    public radius = 1;

    public fromCoordX(x) {
        return this.width / 2. - x;
    }

    public toCoordX(x) {
        return this.width / 2. - x;
    }

    public toCoordY(y) {
        return this.height / 2. - y;
    }


    constructor() {
    }
}
