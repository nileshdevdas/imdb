import {Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { 
         SessionStorage, 
         SessionStorageService, 
       } from 'ng2-webstorage';
@Injectable()
export class LoggedService {
    private loginSource =new Subject<string>();
    private logoutSource =new Subject<string>();
    loginBroadcaster = this.loginSource.asObservable();
    logoutBroadcaster = this.logoutSource.asObservable();
    @SessionStorage()
    islogged: boolean;
    @SessionStorage()
    logged : string; 
    login(username: string): boolean {
        this.islogged = true;
        this.logged = username;
        this.loginSource.next(username);
        return this.islogged;
    }
    logout(username: string): boolean {
        this.islogged = false;
        this.logged= undefined;
        this.logoutSource.next(username);
        return this.islogged;
    }
}