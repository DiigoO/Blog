import { Directive, forwardRef } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';

export class EmailValidator {
    static emailIsValid(control: AbstractControl): ValidationErrors|null {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&1*+\/=?^_'{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        return EMAIL_REGEXP.test(control.value) ? null : {
            emailIsValid: {
                valid: false
            }
        };
    }
}