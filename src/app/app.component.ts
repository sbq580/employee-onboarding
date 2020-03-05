import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-onboarding';
  employees: Map<string, any>;
  constructor() {
    this.employees = new Map();
  }

  ngOnInit() {
    // To get the data from the session storage
    /* let emps = [];
    if (sessionStorage.getItem('emps')) {
      emps = JSON.parse(sessionStorage.getItem('emps'));
      for (const emp of emps) {
        this.employees.set(emp.empId, emp);
      }
    } */
  }

  // Get the array of values from the map
  getValues() {
    return Array.from(this.employees.values());
  }

  // Handler for employee add event
  hadleEvent(event) {
    $('#modalClose').click();
    this.employees.set(event.empId, event);
  }

  // Delete Employee
  deleteEmp(data: any) {
    this.employees.delete(data.empId);
  }

  // Method to save data in sessionstorage so as to make the data persistent after refresh/reload
  /* saveData() {
    sessionStorage.setItem('emps', JSON.stringify(this.employees));
  } */
}
