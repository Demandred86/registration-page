import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { TextInputComponent } from "./text-input/text-input.component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CheckboxComponent } from "./checkbox/checkbox.component";

@NgModule({
    declarations: [TextInputComponent, CheckboxComponent],
    exports: [TextInputComponent, CheckboxComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
        MatInputModule,
        MatFormFieldModule,
        FontAwesomeModule
    ]
})
export class InputModule { }
