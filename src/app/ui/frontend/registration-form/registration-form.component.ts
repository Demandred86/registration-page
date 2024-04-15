import { FormControl, FormGroup, AbstractControl, ValidationErrors, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { emailRegex, } from 'src/app/shared/properties/regex.utils';
import { assetPath } from 'src/app/shared/properties/types.utils';
import { passwordValidator, validatePassword } from 'src/app/shared/utils/validators/passwordValidator';
import { addressValidator } from 'src/app/shared/utils/validators/validator';


@Component({
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {

	formGroup!: FormGroup;
	backgroundForm: assetPath = './assets/background/background-form.jpg';
	forbiddenWords: string[] = [];


	ngOnInit(): void {
		this.initFormGroup();

		this.formGroup.controls['password'].valueChanges.subscribe((value) => {
			if (!value) this.resetPasswordErrors();
			else {
				const passwordCurrentErrors = this.formGroup.controls['password'].errors;
				this.updatePasswordErrorsFlags(passwordCurrentErrors);
			}
		});
	}

	updatePasswordErrorsFlags(errors: ValidationErrors | null): void {
		this.passwordMin.setValue(!errors?.['minLength']);
		this.passwordNumber.setValue(!errors?.['hasANumber']);
		this.passwordSpecial.setValue(!errors?.['insufficientSpecialCharacters']);
		this.passwordSpaces.setValue(!errors?.['containsSpace']);
		this.nameOrSurnameUsed.setValue(!errors?.['nameOrSurnameUsed']);
	}
	resetPasswordErrors(): void {
		this.passwordMin.setValue(false);
		this.passwordNumber.setValue(false);
		this.passwordSpecial.setValue(false);
		this.passwordSpaces.setValue(false);
		this.nameOrSurnameUsed.setValue(false);
	}

	private initFormGroup(): void {
		this.formGroup = new FormGroup(
			{
				firstName: new FormControl('', [Validators.required]),
				lastName: new FormControl('', [Validators.required]),
				email: new FormControl(null, [Validators.required, Validators.pattern(emailRegex)]),
				address: new FormControl(null, [addressValidator(10)]),
				password: new FormControl(null, [Validators.required, passwordValidator()]),
				repeatedPassword: new FormControl(null, Validators.required),
				passwordMin: new FormControl({ value: false, disabled: true }),
				passwordNumber: new FormControl({ value: false, disabled: true }),
				passwordSpecial: new FormControl({ value: false, disabled: true }),
				passwordSpaces: new FormControl({ value: false, disabled: true }),
				passwordForbiddenWords: new FormControl({ value: false, disabled: true }),
				nameOrSurnameUser: new FormControl({ value: false, disabled: true }),
			},
			{
				validators: [validatePassword],
			}
		);
	}

	private get passwordMin(): AbstractControl {
		return this.formGroup.get('passwordMin') as AbstractControl;
	}

	private get passwordSpaces(): AbstractControl {
		return this.formGroup.get('passwordSpaces') as AbstractControl;
	}

	private get passwordSpecial(): AbstractControl {
		return this.formGroup.get('passwordSpecial') as AbstractControl;
	}
	private get passwordNumber(): AbstractControl {
		return this.formGroup.get('passwordNumber') as AbstractControl;
	}
	private get nameOrSurnameUsed(): AbstractControl {
		return this.formGroup.get('nameOrSurnameUser') as AbstractControl;
	}

	get passwordMismatch(): boolean {
		if (this.formGroup?.errors && this.formGroup?.errors["passwordMismatch"]) {
			return true
		}
		return false
	}

	get isFormValid(): boolean {
	return this.formGroup.valid
	}
}


// check if passwords are the same
// change font of checkbuttons label
// change color of checkbuttons depending on validation