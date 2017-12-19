import {AuthComponent} from "./auth/auth.component";
import {Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {LoggedInResolver} from "../../app.resolver";

export const routes: Routes = [
    {
        path: "",
        component: MainComponent,
        resolve: [LoggedInResolver]
    },
    {
        path: "login",
        component: AuthComponent
    },
    {
        path: "**",
        redirectTo: "/",
        pathMatch: "full"
    }
];