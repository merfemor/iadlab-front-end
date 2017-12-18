import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-point-form',
    templateUrl: 'point-form.component.html'
})
export class PointFormComponent implements OnInit {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            x: ['0', Validators.required],
            y: ['0', Validators.required]
        });
    }

    onSubmit() {

    }

}
