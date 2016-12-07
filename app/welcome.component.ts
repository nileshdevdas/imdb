

import { Component } from '@angular/core';
@Component({
    selector: 'welcome',
    template: '<h1>Welcome to {{message}}</h1>'
})
export class WelcomeComponent {
    message: string = "Angular 2 By Nilesh";
}