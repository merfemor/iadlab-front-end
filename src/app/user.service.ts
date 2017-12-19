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
        return this._user !== null;
    }

    public register(username: string, password: string) {

    }

    public login(username: string, password: string) {

    }
}
