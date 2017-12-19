import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private userService: UserService,
                private router: Router) {
    }

    static confirmPasswordValidator(c: AbstractControl) {
        if (c.get('password').value !== c.get('confirm').value)
            return {passwordConfirmValidator: {}};
        return null;
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            login: ['', [
                Validators.required,
                Validators.pattern("^[a-zA-Z0-9_-]{1,40}$")
            ]],
            passwords: this.formBuilder.group({
                    password: ['', [
                        Validators.required,
                        Validators.pattern("^[A-Za-z\\d!@#$%^&*()_+=-]{6,12}$")
                    ]],
                    confirm: ['']
                },
                {validator: RegisterComponent.confirmPasswordValidator})
        });
    }

    onSubmit(): void {
        const login = this.form.get('login').value;
        const password = this.form.get('passwords.password').value;
        this.userService.register(login, password).subscribe(u => {
            this.router.navigateByUrl('/');
        }, (err) => {
            console.error(err);
        });
    }
}
