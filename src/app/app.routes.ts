import { Routes } from "@angular/router";
import { FrontendComponent } from "./ui/frontend/frontend.component";
import { frontendRoutes } from "./ui/frontend/frontend.routes";

export const routes: Routes = [
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    }
];