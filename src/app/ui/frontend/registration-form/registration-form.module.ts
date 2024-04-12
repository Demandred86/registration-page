import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from "src/app/shared/components/input/input.module";
import { RegistrationFormComponent } from "./registration-form.component";
import { TranslateModule } from "@ngx-translate/core";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    InputModule,
    TranslateModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule

  ],
  exports: [RegistrationFormComponent]
})
export class RegistrationFormModule { }
