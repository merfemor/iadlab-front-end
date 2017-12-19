import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    private _user: User;

    constructor() {
    }

    get user(): User {
        return this._user;
    }

    public isLoggedIn(): boolean {
        return !!this._user;
    }

    public register(login: string, password: string) {
        this._user = {
            username: login
        };
    }

    public login(login: string, password: string) {
        this._user = {
            username: login
        };
    }
}
