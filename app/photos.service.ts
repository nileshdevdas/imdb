import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PhotoService{
    http : Http;
    constructor(http: Http){
       this.http = http;
    }
    getData(res:Response){
        return res.json();
    }
    getPosts():Promise<any>{
        return this.http.get('https://jsonplaceholder.typicode.com/photos').map(res=> res.json()).toPromise();
    }
} 