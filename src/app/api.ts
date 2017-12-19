export const API_URL = 'http://localhost:8080/iad-lab/api/';

export class Point {
    id?: number;
    x: number;
    y: number;
}

export class User {
    id?: number;
    login?: string;
    password?: string;
}