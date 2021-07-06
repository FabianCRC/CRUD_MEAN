import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from "../../models/employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res;
      },
      err => console.log(err)
    );
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeService.updateEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmployees();
      });
    } else {
      this.employeeService.createEmployee(form.value).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  deleteEmployee(_id: String | any) {
    if (confirm("Are you sure you want to delete it?")) {
      console.log(_id)
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployees();
      });
    }
  }

  updateEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
