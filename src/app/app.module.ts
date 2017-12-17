import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MainComponent} from './main/main.component';
import {AuthComponent} from './auth/auth.component';
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";
import {SigninComponent} from './auth/signin/signin.component';
import {RegisterComponent} from './auth/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        AuthComponent,
        SigninComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(routes),
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
