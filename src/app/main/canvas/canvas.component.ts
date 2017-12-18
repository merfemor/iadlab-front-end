import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-canvas',
    templateUrl: 'canvas.component.html',
    styleUrls: ['canvas.component.css']
})
export class CanvasComponent implements OnInit {
    public form: FormGroup;
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


    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            r: '1'
        })
    }

}
