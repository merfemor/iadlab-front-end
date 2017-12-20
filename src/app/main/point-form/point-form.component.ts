import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PointService} from "../../point.service";

@Component({
    selector: 'app-point-form',
    templateUrl: 'point-form.component.html'
})
export class PointFormComponent implements OnInit {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder, private pointService: PointService) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            x: ['0', [Validators.required, Validators.min(-5), Validators.max(5)]],
            y: ['0', [Validators.required, Validators.min(-5), Validators.max(5)]]
        });
    }

    onSubmit() {
        const x = this.form.get('x').value;
        const y = this.form.get('y').value;
        this.pointService.addPoint({x: x, y: y}).subscribe(() => {
        }, e => {
            console.log(e);
        });
    }

}
