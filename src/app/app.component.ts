import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-onboarding';
  // employees: any[] = [];
  employees: Map<string, any>;
  constructor() {
    this.employees = new Map();
  }

  ngOnInit() {
    let emps = [];
    if (sessionStorage.getItem('emps')) {
      emps = JSON.parse(sessionStorage.getItem('emps'));
      for (const emp of emps) {
        this.employees.set(emp.empId, emp);
      }
    }
  }

  getValues() {
    return Array.from(this.employees.values());
  }

  hadleEvent(event) {
    $('#modalClose').click();
    console.log(event);
    this.employees.set(event.empId, event);
  }

  deleteEmp(data: any) {
    console.log(data.empId);
    this.employees.delete(data.empId);
  }

  saveData() {
    sessionStorage.setItem('emps', JSON.stringify(this.employees));
  }
}
