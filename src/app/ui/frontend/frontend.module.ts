import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { FrontendComponent } from "./frontend.component";
import { RouterModule } from "@angular/router";
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationFormModule } from "./registration-form/registration-form.module";
@NgModule({
    declarations: [
        FrontendComponent,
        RegistrationFormComponent
    ],
    imports: [
        SharedModule,
        RouterModule,
        RegistrationFormModule
    ]
})
export class FrontendModule {}

