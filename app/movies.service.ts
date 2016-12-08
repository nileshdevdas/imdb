import { Injectable } from '@angular/core';
import { Movies } from './movies.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class MoviesService {
    private http: Http;
    constructor(http: Http) {
        this.http = http;

    }
    getMovies(moviesname:string): Observable<Movies> {
        console.log("getting movies");
        return this.http.get("http://www.omdbapi.com/?s=" + moviesname+ "&plot=full&r=json&page=1").map(res => {
            return res.json();
        });
    }
}
