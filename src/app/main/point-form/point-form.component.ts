import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'app-point-form',
    templateUrl: 'point-form.component.html'
})
export class PointFormComponent {
    form: FormGroup;
}
