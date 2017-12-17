import {AuthComponent} from "./auth/auth.component";
import {Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
    {
        path: "",
        component: MainComponent,
        //resolve: [LoggedInResolver]
        // TODO: implement LoggedInResolver
    },
    {
        path: "join",
        component: AuthComponent
    },
    {
        path: "**",
        redirectTo: "/",
        pathMatch: "full"
    }
];