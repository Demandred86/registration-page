import { Component, EventEmitter, Output, OnInit, Input } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { translateKey } from "src/app/shared/properties/types.utils";
import { Icon, icon } from "@fortawesome/fontawesome-svg-core";


@Component({
    selector: "app-text-input",
    templateUrl: "./text-input.component.html",
    styleUrls: ["./text-input.component.scss"]

})

export class TextInputComponent implements OnInit {
    @Input() label!: translateKey;
    @Input() FormGroup!: FormGroup;
    @Input() controlName!: string | number;
    @Input() type!: string;
    @Input() defaultIcon: Icon = icon("tick");
    @Input() successIcon: Icon = icon("check-circle");
    @Input() failIcon: Icon = icon("exclamation-circle");
    @Output() blurEvent = new EventEmitter<unknown>();

    touched: boolean = false;

    ngOnInit(): void {
    }
    blurAction() {
        this.validateInput();
        this.blurEvent.emit();
    }

    get _placeholder(): translateKey {
        return `${this.label}.${this.controlName}.placeholder`;
    }

    validateInput() {
        const control = this.control;
        if (!control) return;
        control.markAsTouched();
        control.updateValueAndValidity();
        this.touched = true;
    }

    get isValid(): boolean {
        return this.FormGroup.controls[this.controlName].valid
    }

    public selectIcon(): Icon {
        if (!this.touched) return icon("tick");
        return this.isValid ? this.successIcon : this.failIcon

    }

    errorString(errorLabel: string): translateKey {
        return `${this.label}.${this.controlName}.error.${errorLabel}`;
    }
    

    public get control() {
        return this.FormGroup.controls[this.controlName.toString()];
    }
    get inputError(): boolean {
        const control = this.control;
        let hasErrors = false
        if (!control) return false;
        if (control?.errors)
            hasErrors = Object.keys(control?.errors).length > 0;
        return control?.touched && hasErrors;
    }


    get hasValidators(): boolean {
        return this.FormGroup.controls[this.controlName].validator ? true : false;
    }

    get isRequired(): boolean {
        return this.FormGroup.controls[this.controlName].hasValidator(Validators.required) ? true : false;
    }

    get showValidationIcon(): boolean {
        return this.hasValidators && this.isRequired
    }

    get errors(): string[] | [] {
        const validationErrors = this.FormGroup.controls[this.controlName].errors;
        if (validationErrors)
            return Object.keys(validationErrors)
        return []
    }




}
