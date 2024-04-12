import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { translateKey } from "../../../properties/types.utils";
import { FormGroup } from "@angular/forms";

export enum ColorCheckboxEnum {
    "valid" = "checkbox-valid",
    "default" = "checkbox-def",
}


@Component({
    selector: "app-checkbox",
    templateUrl: "./checkbox.component.html",
    styleUrls: ["./checkbox.component.scss"]
})
export class CheckboxComponent implements OnInit {

    @Input() label!: translateKey;
    @Input() isChecked?: boolean = false;
    @Input() controlName!: string;
    @Input() formGroupRef!: FormGroup;
    @Input() disabled = true;
    @Output() changed = new EventEmitter<boolean>();
    checkboxColor: ColorCheckboxEnum = ColorCheckboxEnum.default

    ngOnInit(): void {
        this.formGroupRef.valueChanges.subscribe(() => {
            if (this.formGroupRef.controls[this.controlName].value === true) this.checkboxColor = ColorCheckboxEnum.valid
            else this.checkboxColor = ColorCheckboxEnum.default;
        })
    }
    toggleCheckbox() {
        const control = this.formGroupRef.get(this.controlName);
        if (!control) return;
        this.isChecked = !this.isChecked;
        control.setValue(this.isChecked);
        this.validateInput();
        this.changed.emit(this.isChecked);
    }

    validateInput() {
        const control = this.formGroupRef.get(this.controlName);
        if (!control) return;
        control.markAsTouched();
        control.updateValueAndValidity();
    }

    get isRequired(): boolean {
        const control = this.formGroupRef.get(this.controlName);
        if (!control) return false;
        if (!control.validator) return false;
        const tmp = control.validator(control);
        return tmp == null ? false : tmp.hasOwnProperty("required");
    }

    get _label(): translateKey {
        return `${this.label}.${this.controlName}.placeholder`;
    }

    get _error(): translateKey {
        return `${this.label}.${this.controlName}.error`;
    }

    get inputError(): boolean {
        const control = this.formGroupRef.get(this.controlName);
        if (!control) return false;
        const hasErrors = control?.errors != null;
        return control?.touched && hasErrors;
    }


}
