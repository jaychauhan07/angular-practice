import { EmployeeService } from './../employee.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.css']
})
export class EmployeesDetailComponent implements OnInit, OnDestroy {

  employeeId: any;
  employeeDetail: any;
  subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService) { }
  

  ngOnInit(): void {
    // this.employeeId = this.route.snapshot.paramMap.get('id');
    // OR
    this.subscription = this.route.paramMap.subscribe((param: ParamMap) => {
      console.log(param.get('id'));
      this.employeeId =  param.get('id');
      this.getEmployee();
    })
    
    
    
  }

  getEmployee() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(emp => {
      this.employeeDetail = emp;
    },(er) => {
      if(er.status === 404) {
        this.employeeDetail = {
          firstName: "Mr",
          lastName: "India"
        }
      } 
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
