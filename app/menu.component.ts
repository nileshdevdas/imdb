import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggedService } from './login.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'mainmenu',
    templateUrl: 'app/mainmenu.html',
})
export class MenuComponent {
    loginService: LoggedService;
    subscription: Subscription;
    isloggedin = false;
    constructor(loginService: LoggedService) {
        console.log("menu.component.ts constructor");
        this.loginService = loginService;
        console.log("MenuComponent Subscribed to Subject Login")
        this.loginService.loginBroadcaster.subscribe(res => {
            console.log(res);
            console.log("Event Received");
            this.isloggedin = true;
        });
        console.log("MenuComponent Subscribed to Subject Logout")
        this.loginService.logoutBroadcaster.subscribe(res => {
            console.log(res);
            console.log("Event Received");
            this.isloggedin = false;
        });
    }
    logout(username: string): void {
        this.loginService.logout(username);
    }
    ngOnInit() {
        console.log("Menu init")
    }
    ngOnDestroy() {
        console.log("Descruct")
    }
    version: number = 1;
    menuItems: any[] = [
        {
            link: "Home",
            secured: false
        },
        {
            link: "Movies",
            secured: true
        },
        {
            link: "TV",
            secured: true
        },
        {
            link: "Celebrities",
            secured: true
        },
        {
            link: "Events",
            secured: true
        },
        {
            link: "News",
            secured: true
        },
        {
            link: "WatchList",
            secured: true
        },
        {
            link: "Signup",
            secured: true
        }
    ]
}  