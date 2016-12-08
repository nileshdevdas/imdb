import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggedService } from './login.service';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    loggedIn: boolean = false;
    loginService: LoggedService;
    constructor(loginService: LoggedService) {
        console.log("login.component.ts");
        this.loginService = loginService;
        console.log("LoginComponent Subscribed to Subject Login")

        this.loginService.logoutBroadcaster.subscribe(res => {
            this.loggedIn = false;
        });
        console.log("LoginComponent Subscribed to Subject Logout")

        this.loginService.loginBroadcaster.subscribe(res => {
            this.loggedIn = true;
        });

    }
    ngOnInit() {
        this.loggedIn = this.loginService.islogged;
        this.username = this.loginService.logged;
    }
    ngOnDestroy() {
    }
    login() {
        console.log("login.component.ts => loggedin ")
        this.loggedIn = this.loginService.login(this.username);
    }

    logout() {
        console.log("loggedin ")
        this.loggedIn = this.loginService.logout(this.username);
    }
}