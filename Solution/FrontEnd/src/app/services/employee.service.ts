import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee = {
    name: '',
    _id: '',
    position: '',
    office: '',
    salary: 0,
  };

  employees: Employee[] = [];

  url_API = 'http://localhost:4000/api/employees';
  constructor(private httpCliente: HttpClient) { }

  getEmployees() {
    return this.httpCliente.get<Employee[]>(this.url_API);
  }

  createEmployee(employee: Employee) {
    console.log(employee)
    return this.httpCliente.post(this.url_API, employee);
  }

  updateEmployee(employee: Employee) {
    return this.httpCliente.put(this.url_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string) {
    return this.httpCliente.delete(this.url_API + `/${_id}`);
  }
}
