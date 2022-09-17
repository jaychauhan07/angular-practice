import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstName: any = "";
  lastName: any = 0;
  employees: any = [
    {
      id: 1,
      firstName: "Ankit",
      lastName: "Jadon"
    },
    {
      id: 2,
      firstName: "Shakti",
      lastName: "Rajawat"
    },
    {
      id: 3,
      firstName: "Jigu",
      lastName: "Dabhi"
    },
    {
      id: 4,
      firstName: "Jay",
      lastName: "Chauhan"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
