import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { hasANumber, hasSpecialCharacter, passwordRegex } from '../../properties/regex.utils';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const errors: ValidationErrors = {};

    const matches = control.value.match(hasSpecialCharacter);
    if (!matches || matches.length < 3) {
      errors['insufficientSpecialCharacters'] = true;
    }

    if (control.value.includes(' ')) {
      errors['containsSpace'] = true;
    }

    if (!control.value.match(hasANumber)) {
      errors['hasANumber'] = true;
    }

    if (control.value.length < 10) {
      errors['minLength'] = true;
    }
    return errors ? errors : null;
  };
}


  export function validatePassword(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.get('password')) {
      return null; // No validation errors if 'password' control is not present
    }

    const errors: ValidationErrors = {};
    const password = control.get('password')?.value as string;

    const firstName = control.get('firstName')?.value as string | undefined;
    if (firstName)
  if(password)
    
    if (firstName && firstName.length > 3 && password && password.toLowerCase().includes(firstName.toLowerCase())) {
    
      errors['nameOrSurnameUsed'] = true;
    }

    const lastName = control.get('lastName')?.value as string | undefined;
    if (lastName && lastName.length > 3 && password &&password.toLowerCase().includes(lastName.toLowerCase())) {
      errors['nameOrSurnameUsed'] = true;
    }

    const confirmPassword = control.get('repeatedPassword')?.value as string | undefined;
    if (password && confirmPassword && password.trim() !== confirmPassword.trim()) {
      errors['passwordMatchError'] = true;
    }

    if (errors["nameOrSurnameUsed"]) {
      control.get('password')?.setErrors(errors); 
    } 
    if (errors["passwordMatchError"]) {
      control.get('repeatedPassword')?.setErrors(errors); 
    }
    return Object.keys(errors).length > 0 ? errors : null;
  }

