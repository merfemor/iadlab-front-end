import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "./src/app/user.service";

@Injectable()
export class LoggedInResolver {
    constructor(private userService: UserService, private router: Router) {
    }

    resolve(): void {
        if (!this.userService.isLoggedIn())
            this.router.navigate(['/', 'login']);
    }
}