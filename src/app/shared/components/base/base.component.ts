import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { translateKey } from "../../properties/types.utils";

@Component({
    selector: "app-base-input",
    template: ""
})
export abstract class BaseInputComponent implements OnInit {
    @Input() label?: translateKey = "";
    @Input() tooltip = false;
    @Input() controlName!: string | number;
    @Input() formGroupRef!: FormGroup;
    @Input() isDisabled = false;

    public isRequired = false;

    validateInput() {
        const control = this.control;
        if (!control) return;
        control.markAsTouched();
        control.updateValueAndValidity();
    }

    ngOnInit(): void {
        this.isRequired = this.checkRequired();
    }

    checkRequired(): boolean {
        const control = this.control;
        if (!control) return false;
        if (!control.validator) return false;
        const tmp = control.validator(control);
        return tmp == null ? false : tmp.hasOwnProperty("required");
    }

    get _tooltip(): translateKey {
        return (this.label) ? `${this.label}.${this.controlName}.tooltip` : "";
    }

    get _label(): translateKey {
        return (this.label) ? `${this.label}.${this.controlName}.placeholder` : "";
    }

    get _error(): translateKey {
        return (this.label) ? `${this.label}.${this.controlName}.error` : "";
    }

    get selectPlaceholder(): translateKey {
        return `${this.label}.${this.controlName}.selectPlaceholder`;
    }

    get inputError(): boolean {
        const control = this.control;
        if (!control) return false;
        const hasErrors = control?.errors != null;
        return control?.touched && hasErrors;
    }

    public get control() {
        return this.formGroupRef.get(this.controlName.toString());
    }

    public get showSupStar(): boolean {
        return this.isRequired && this._label !== "";
    }
}