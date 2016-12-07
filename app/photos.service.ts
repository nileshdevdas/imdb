import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';

@Injectable()
export class PhotoService {
    http: Http;
    url : string = "https://jsonplaceholder.typicode.com/";
    constructor(http: Http) {
        this.http = http;
    }
    getPosts(): Observable<Post> {
        return this.http.get(this.url+'photos').map(res => res.json());
    }
} 