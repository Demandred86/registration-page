import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { FrontendComponent } from "./frontend.component";
import { RouterModule } from "@angular/router";
import { RegistrationFormModule } from "./registration-form/registration-form.module";
@NgModule({
    declarations: [
        FrontendComponent,
    ],
    imports: [
        SharedModule,
        RouterModule,
        RegistrationFormModule,
        
    ]
})
export class FrontendModule {}

