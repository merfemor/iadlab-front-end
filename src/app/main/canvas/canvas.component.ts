import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgvasComponent} from "ngvas/lib/components/ngvas.component";
import {PointService} from "../../point.service";

@Component({
    selector: 'app-canvas',
    templateUrl: 'canvas.component.html',
    styleUrls: ['canvas.component.css']
})
export class CanvasComponent implements OnInit {
    public form: FormGroup;
    public width = 400;
    public height = 400;
    public xpxPerCell = this.width / 16.;
    public ypxPerCell = this.height / 16.;

    @ViewChild('canvas') canvas: NgvasComponent;

    toCanvasX = x => x * this.xpxPerCell + this.width / 2.;

    ngOnInit() {
        this.form = this.formBuilder.group({
            r: this.radius
        })
    }

    toCanvasY = y => this.width / 2. - y * this.ypxPerCell;
    fromCanvasX = x => (x - this.width / 2.) / this.xpxPerCell;
    fromCanvasY = y => (this.width / 2. - y) / this.ypxPerCell;

    constructor(private formBuilder: FormBuilder,
                public pointService: PointService) {
    }

    public get radius(): number {
        return this.pointService.radius;
    }

    public set radius(r) {
        this.pointService.radius = r;
    }

    onClick(event: MouseEvent) {
        this.pointService.addPoint({
            x: this.fromCanvasX(event.offsetX),
            y: this.fromCanvasY(event.offsetY)
        });
    }

    public color(point) {
        if (this.pointService.isPointInArea(point))
            return '#00FF00';
        return '#FF0000';
    }
}
