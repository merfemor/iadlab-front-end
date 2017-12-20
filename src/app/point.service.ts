import {Injectable} from '@angular/core';
import {API_URL, Point} from "./api";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Rx";
import "rxjs/operators/map";

@Injectable()
export class PointService {
    private _points: Point[] = [];

    constructor(private http: HttpClient,
                private userService: UserService) {
        this.http.get<Point[]>(API_URL + "users/" + this.userService.user.id.toString(10) + "/points/", {
            params: new HttpParams().set("password", this.userService.user.password)
        }).subscribe(ps => this._points = ps);
    }

    get points(): Point[] {
        return this._points;
    }

    private _radius: number = 1;

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    public addPoint(point: Point): Observable<Point> {
        return this.http.post<Point>(
            API_URL + "users/" + this.userService.user.id.toString(10) + "/points/",
            point, {
                headers: new HttpHeaders().set("Content-Type", "text/plain"),
                params: new HttpParams().set("password", this.userService.user.password)
            }).map(p => {
            this._points.push(p);
            return p;
        });
    }

    public isPointInArea(p: Point): boolean {
        const x = p.x, y = p.y, r = this.radius;
        return x >= 0 && y >= 0 && x <= r && y <= r / 2. ||
            x <= 0 && y <= 0 && x ** 2 + y ** 2 <= (r / 2.) ** 2 ||
            x <= 0 && y >= 0 && y <= 2 * x + r;
    }
}
