import { Injectable } from '@angular/core';
import { SessionStorage, 
         SessionStorageService, 
       } from 'ng2-webstorage';
@Injectable()
export class LoggedService {
    
    @SessionStorage()
    islogged: boolean;
    
    @SessionStorage()
    logged : string; 

    login(username: string): boolean {
        this.islogged = true;
        this.logged = username;
        // do  event broad cast 
        return this.islogged;
    }
    
    logout(username: string): boolean {
        this.islogged = false;
        this.logged= undefined;
        // do a event broad cast 
        return this.islogged;
    }
}