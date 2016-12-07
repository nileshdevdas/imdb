import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggedService } from './login.service';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    providers: [LoggedService]
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    loggedIn: boolean = false;
    loginService: LoggedService;

    constructor(loginService: LoggedService) {
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        this.loginService = loginService;
    }
    ngOnInit() {
            this.loggedIn = this.loginService.islogged;
            this.username = this.loginService.logged;
    }
    ngOnDestroy() {
    }
    login() {
        console.log("loggedin ")
        this.loggedIn=this.loginService.login(this.username);
    }

    logout() {
        this.loggedIn=this.loginService.logout(this.username);
    }
}
