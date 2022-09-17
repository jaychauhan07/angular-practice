import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<any> {
    return this.http.get("http://localhost:3000/employees");
  }

  getEmployeeById(id: any) : Observable<any> {
    return this.http.get(`http://localhost:3000/employees/${id}`);
  }

}
