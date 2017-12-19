import {Component} from '@angular/core';
import {UserService} from "../user.service";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styles: [`nav {
        border-bottom: .1rem solid #e5e5e5;
    }`]
})
export class HeaderComponent {
    constructor(public userService: UserService) {
    }
}
