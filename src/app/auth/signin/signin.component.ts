import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {
    form: FormGroup;
    failedToLogin: boolean = false;

    constructor(private formBuilder: FormBuilder,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit(): void {
        this.failedToLogin = false;
        const login = this.form.get('login').value;
        const password = this.form.get('password').value;
        this.userService.login(login, password).subscribe((t) => {
            if (t) {
                this.router.navigateByUrl('/');
            } else {
                this.failedToLogin = true;
            }
        }, e => {
            this.failedToLogin = true;
        });
    }
}