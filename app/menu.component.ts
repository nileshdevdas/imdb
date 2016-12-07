import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggedService } from './login.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'mainmenu',
    templateUrl: 'app/mainmenu.html',
    providers: [LoggedService]
})
export class MenuComponent {
    loginService: LoggedService;
    subscription: Subscription;
    constructor(loginService: LoggedService) {
        console.log("Menu");
        this.loginService = loginService;
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