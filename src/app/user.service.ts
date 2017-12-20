import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {API_URL, User} from "./api";
import 'rxjs/add/operator/map';
import {CookieService} from "ngx-cookie-service";
import {AsyncSubject} from "rxjs/AsyncSubject";

@Injectable()
export class UserService {
    private _user: User;
    private sessionLoadStatus: AsyncSubject<boolean> = new AsyncSubject();

    constructor(private http: HttpClient, private cookieService: CookieService) {
        this.restoreUserFromCookies();
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
            this._user.password = password;
            this.saveSessionInCookies();
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
            this.saveSessionInCookies();
            return true;
        });
    }

    public logout() {
        this.clearCookies();
        this._user = null;
    }

    public onSessionLoaded(onLoaded: () => void): void {
        let subscription = this.sessionLoadStatus.subscribe(u => {
            onLoaded();
            if (subscription)
                subscription.unsubscribe();
        });
        if (!subscription)
            onLoaded();
    }

    private saveSessionInCookies(): void {
        this.cookieService.set("login", this._user.login, 30, "/");
        this.cookieService.set("password", this._user.password, 30, "/");
    }

    private clearCookies() {
        this.cookieService.delete("login", "/");
        this.cookieService.delete("password", "/");
    }

    private restoreUserFromCookies() {
        const login = this.cookieService.get("login");
        const password = this.cookieService.get("password");

        if (!login || !password) {
            this.sessionLoadStatus.next(false);
            this.sessionLoadStatus.complete();
            this.clearCookies();
            return;
        }

        this.login(login, password).subscribe(
            u => {
                this.sessionLoadStatus.next(true);
                this.sessionLoadStatus.complete();
            },
            err => {
                this.sessionLoadStatus.next(false);
                this.sessionLoadStatus.complete();
            }
        );
    }
}
