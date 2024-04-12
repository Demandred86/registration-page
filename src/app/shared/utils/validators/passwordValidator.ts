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

  if (!control || !control.get('password')) return null
  const errors: ValidationErrors = {};
  const password = control.get('password')?.value as string;

  if (control.get('firstName') && password && control.get('firstName')?.value && (control.get('firstName')?.value as String).length > 3) {

    const firstName = control.get('firstName')?.value as string;
    if (password.toLowerCase().includes(firstName.toLowerCase())) {
      errors['nameOrSurnameUsed'] = true
    }
  }
  if (control.get('lastName') && password && control.get('lastName')?.value && (control.get('lastName')?.value as String).length > 3) {
    const lastName = control.get('lastName')?.value as string;
    if (password.toLowerCase().includes(lastName.toLowerCase())) {
      errors['nameOrSurnameUsed'] = true
    }
  }

    if (control.get('repeatedPassword')) {
      const confirmPassword = control.get('repeatedPassword')?.value as string;
      if (password && confirmPassword && password.trim() !== confirmPassword.trim()) { errors['passwordMatchError'] = true };
    }

    return errors
  }
