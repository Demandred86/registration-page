import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function  addressValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (!value || value.length >= minLength) {
      return null;
    } else {
      return { minLengthOrEmpty: true };
    }
  };
}