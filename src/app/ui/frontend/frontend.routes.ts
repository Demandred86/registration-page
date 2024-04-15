import { Routes } from "@angular/router";
import {  REGISTRATION_PATH } from "src/app/shared/properties/path.properties";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";

export const frontendRoutes: Routes = [
    {
        path: "",
        redirectTo: REGISTRATION_PATH,
        pathMatch: "full"
    }, 
 
    {
        path: REGISTRATION_PATH,
        component: RegistrationFormComponent
    },
    {
        path: "**",
        component: RegistrationFormComponent
    }
];