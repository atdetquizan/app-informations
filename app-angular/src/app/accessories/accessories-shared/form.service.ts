import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  public markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key: any) => {
      formGroup.controls[key].markAsTouched();
    });
  }

  public isValid(formControl: FormControl) {
    return formControl.touched && !formControl.valid ? 'is-invalid' : '';
  }

  public UpdateValidators(formControl: AbstractControl) {
    formControl.setValidators([Validators.required]);
    formControl.updateValueAndValidity();
    return formControl;
  }
}
