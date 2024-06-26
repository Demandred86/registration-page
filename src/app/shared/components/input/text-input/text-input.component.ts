import { Component, EventEmitter, Output, OnInit, Input } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { translateKey } from "src/app/shared/properties/types.utils";
import { IconDefinition, faCircle, faCircleCheck, faCircleExclamation, faExclamation } from "@fortawesome/free-solid-svg-icons";


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
    @Input() defaultIcon: IconDefinition = faCircle;
    @Input() successIcon: IconDefinition = faCircleCheck;
    @Input() failIcon: IconDefinition = faCircleExclamation;
    @Output() blurEvent = new EventEmitter<unknown>();

    touched: boolean = false;
    selectedIcon!: IconDefinition

    ngOnInit(): void {

        if (this.inputErrors && this.touched) {
            this.selectedIcon = this.failIcon
        }
        else this.successIcon
    }

    blurAction() {
        this.validateInput();
        this.blurEvent.emit();
    }

    get _placeholder(): translateKey {
        return `${this.label}.${this.controlName}.placeholder`;
    }

    get iconClass(): string {
        if (this.inputErrors && this.touched) return 'invalid'
        return "valid"
    }
    get isValid(): boolean {
        return this.FormGroup.controls[this.controlName].valid
    }
    get control() {
        return this.FormGroup.controls[this.controlName.toString()];
    }
    
    validateInput() {
        if (!this.control) return;
        this.control.markAsTouched();
        this.control.updateValueAndValidity();
        this.touched = true;
    }

    errorString(errorLabel: string): translateKey {
        return `${this.label}.${this.controlName}.error.${errorLabel}`;
    }

    get inputErrors(): boolean {
        let hasErrors = false
        if (!this.control) return false;
        if (this.control?.errors)
            hasErrors = Object.keys(this.control?.errors).length > 0;
        return this.control?.touched && hasErrors;
    }  

    get isRequired(): boolean {
        return this.FormGroup.controls[this.controlName].hasValidator(Validators.required) ? true : false;
    }

    get hasValidators(): boolean {
        return this.FormGroup.controls[this.controlName].validator ? true : false;
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
