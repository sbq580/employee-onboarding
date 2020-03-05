import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NameValidator, EmailValidator } from 'src/app/shared/validators/custom-validators';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  employeeForm: FormGroup;
  items: any[];
  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, NameValidator]],
      empId: ['', Validators.required],
      dept: ['', Validators.required],
      email: ['', [Validators.required, EmailValidator]],
      doj: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.items = [
      'Sales',
      'Finance & Accounts',
      'Technology',
      'Human Resource',
      'Operations'
    ];
  }

  submitForm() {
    console.log('Employee submitted');
    this.messageEvent.emit(this.employeeForm.value);
    this.employeeForm.reset();
  }

}
