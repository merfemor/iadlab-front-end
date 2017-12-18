import {Component} from '@angular/core';
import {PointService} from "../../point.service";

@Component({
    selector: 'app-result-table',
    templateUrl: 'result-table.component.html'
})
export class ResultTableComponent {
    constructor(public pointService: PointService) {
    }
}
