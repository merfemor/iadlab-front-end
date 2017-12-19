import {Injectable} from '@angular/core';
import {Point} from "./api";

@Injectable()
export class PointService {
    private _points: Point[] = [];

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

    public addPoint(point: Point) {
        this._points.push(point);
    }

    public isPointInArea(p: Point): boolean {
        const x = p.x, y = p.y, r = this.radius;
        return x >= 0 && y >= 0 && x <= r && y <= r / 2. ||
            x <= 0 && y <= 0 && x ** 2 + y ** 2 <= (r / 2.) ** 2 ||
            x <= 0 && y >= 0 && y <= 2 * x + r;
    }
}
