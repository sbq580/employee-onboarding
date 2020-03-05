import { AbstractControl } from '@angular/forms';

export function NameValidator(control: AbstractControl) {
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(control.value)) {
        return { invalidName: true };
    }
}


export function EmailValidator(control: AbstractControl) {
    const emailRegex = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    if (!emailRegex.test(control.value)) {
        return { invalidEmail: true };
    }
}