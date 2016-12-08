import {Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject'; //1
import { 
         SessionStorage, 
         SessionStorageService, 
       } from 'ng2-webstorage';
@Injectable()
export class LoggedService {
    private loginSource =new Subject<string>();  // 2
    private logoutSource =new Subject<string>(); // 2
    loginBroadcaster = this.loginSource.asObservable(); //3
    logoutBroadcaster = this.logoutSource.asObservable();//3
    @SessionStorage()
    islogged: boolean;
    @SessionStorage()
    logged : string; 
    login(username: string): boolean {
        this.islogged = true;
        this.logged = username;
        this.loginSource.next(username); //4 
        return this.islogged;
    }
    logout(username: string): boolean {
        this.islogged = false;
        this.logged= undefined;
        this.logoutSource.next(username); //4 
        return this.islogged;
    }
}