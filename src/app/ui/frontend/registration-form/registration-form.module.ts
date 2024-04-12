import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from "src/app/shared/components/input/input.module";
import { RegistrationFormComponent } from "./registration-form.component";
import { TranslateModule } from "@ngx-translate/core";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "src/app/shared/components/button/button/button.module";


@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    InputModule,
    TranslateModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    ButtonModule

  ],
  exports: [RegistrationFormComponent]
})
export class RegistrationFormModule { }
