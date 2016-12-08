import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
import { SessionStorage, SessionStorageService } from "ng2-webstorage";
import {LoggedService } from './login.service';
@Directive(
    { 
        selector: "[secured]" 

    }
)
export class SecurityDirective {
    constructor(sessionStorage: SessionStorageService, elRef: ElementRef, loggedService:LoggedService) {
        if (sessionStorage.retrieve("islogged")) {
            elRef.nativeElement.style.display = 'block';
        }else{
            elRef.nativeElement.style.display = 'none';
        }
        
        loggedService.loginBroadcaster.subscribe(res=> {
            console.log("directive refreshed ..........");
            console.log(elRef.nativeElement.style.display='block');

        });

        loggedService.logoutBroadcaster.subscribe(res=> {
            console.log("directive refreshed ..........");
            console.log(elRef.nativeElement.style.display='none');

        });
    }
}