import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
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

    public login(login: string, password: string): Observable<boolean> {
        return this.http.get<string>(API_URL + "users/" + login, {
            params: new HttpParams().set("password", password.toString())
        }).map(msg => {
            if (msg === "Incorrect password")
                return false;
            this._user = {
                id: Number(msg),
                login: login,
                password: password,
            };
            return true;
        });
    }

    public logout() {
        this._user = null;
    }
}
