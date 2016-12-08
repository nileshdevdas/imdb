import { Component, NgZone } from '@angular/core';
import { LoggedService } from './login.service';

@Component({
    selector: 'my-app',
    template: `
              <div class="container">
                <mainmenu></mainmenu>
                <router-outlet></router-outlet>
              </div>
              <demopipe></demopipe>
            `,
    providers: [LoggedService]
})
export class AppComponent {
    isLoading: boolean = true;
    loggedService: LoggedService;
    constructor(loggedService: LoggedService, ngZone: NgZone) {
        console.log("app.component.ts ==> constructor");
        this.loggedService = loggedService;
    }
}