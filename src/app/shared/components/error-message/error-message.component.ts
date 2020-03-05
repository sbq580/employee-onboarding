import { Component, OnInit, Input } from '@angular/core';
import { FormControl, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  template: '<div *ngIf="errorMessage" class="error-txt">{{errorMessage}}</div>'
})
export class ErrorMessageComponent implements OnInit {
  @Input('control') control: FormControl;
  errMap: Map<string, any>;
  constructor() {
    this.errMap = new Map();
    this.setErrorMsgs();
  }

  ngOnInit() {
  }

  setErrorMsgs() {
    this.errMap.set('required', { messageText: ' is required', });
    this.errMap.set('invalidName', { messageText: 'Invalid Characters'});
    this.errMap.set('invalidEmail', { messageText: 'Invalid email'});
  }

  get errorMessage() {
    // tslint:disable-next-line: forin
    for (const propertyName in this.control.errors) {
      const controlName = this.getControlName(this.control);
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return this
        .getValidatorErrorMessageWithLabel(
          controlName, propertyName,
          this.control.errors[propertyName]);
      }
    }
    return null;
  }

  getControlName(control: AbstractControl) {
    let controlName = null;
    // tslint:disable-next-line:no-string-literal
    const parent = control['_parent'];

    if (parent instanceof FormGroup) {
        Object.keys(parent.controls).forEach((name) => {
            if (control === parent.controls[name]) {
                controlName = name;
            }
        });
    }
    return controlName;
  }

  getValidatorErrorMessageWithLabel(
    key: string,
    validatorName: string,
    validatorValue?: any) {
      const label: string = this.getLabelForControl(document, key);
      const labelName: string = label;
      const aErrorObj = this.errMap.get(validatorName);
      const aMsg: string = aErrorObj.messageText;
      let retVal = '';
      if (validatorName === 'required' || validatorName === 'invalidDate') {
          retVal = labelName + aMsg;
      } else {
          retVal = aMsg;
      }
      return retVal;
  }

  getLabelForControl(doc, key) {
    const lblFull = doc.getElementById(key).innerHTML;
    let lbl = lblFull;
    if (lblFull.indexOf(':') > 0) {
        lbl = lblFull.substring(0, lblFull.indexOf(':'));
    }
    return lbl;
}

}
