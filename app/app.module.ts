import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { LoginComponent } from './login.component';
import { MoviesComponent } from './movies.component';
import { MovieFilterPipe } from './moviesfilter.pipe';
import { HighlighterDirective } from './highlight.directive';
import { Ng2Webstorage } from 'ng2-webstorage';
import { HttpModule, JsonpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { SecurityDirective } from './security.directive';
import { OopsComponent } from './oops.component';
import { PipeDemoComponent } from './pipedemo.component';
const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'home',
        component: WelcomeComponent
    },
    {
        path: 'tv',
        component: MoviesComponent
    },
    {
        path: 'celebrities',
        component: WelcomeComponent
    },
    {
        path: 'events',
        component: MoviesComponent
    },
    {
        path: 'news',
        component: MoviesComponent
    },
    {
        path: 'signup',
        component: MoviesComponent
    },
    {
        path: 'watchlist',
        component: MoviesComponent
    },
    {
        path: '**',
        component: OopsComponent
    }
]
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2Webstorage,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        PipeDemoComponent,
        AppComponent,
        OopsComponent,
        WelcomeComponent,
        MenuComponent,
        LoginComponent,
        MoviesComponent,
        MovieFilterPipe,
        HighlighterDirective,
        SecurityDirective],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private _ngZone: NgZone) {
        console.log("app.module.ts constructor");
    }
}