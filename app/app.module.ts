import { NgModule } from '@angular/core';
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





const routes: Routes = [
    {
        path: 'home',
        component: LoginComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
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
            RouterModule.forRoot(routes)],
    declarations: [
        AppComponent,
        WelcomeComponent,
        MenuComponent,
        LoginComponent,
        MoviesComponent,
        MovieFilterPipe,
        HighlighterDirective,
        SecurityDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }