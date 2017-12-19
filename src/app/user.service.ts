import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {API_URL, User} from "./api";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private _user: User;

    constructor(private http: HttpClient) {
    }

    get user(): User {
        return this._user;
    }

    public isLoggedIn(): boolean {
        return !!this._user;
    }

    public register(login: string, password: string): Observable<User> {
        let user = {
            login: login,
            password: password
        };
        return this.http.post<User>(API_URL + 'users', user, {
            headers: new HttpHeaders()
                .set("Content-Type", "text/plain")
        }).map(u => {
            this._user = u;
            return u;
        });
    }

    public login(login: string, password: string) {
        this._user = {
            login: login
        };
    }

    public logout() {
        this._user = null;
    }
}
