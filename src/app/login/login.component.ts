import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : any;
  password: any;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login = () => {
    this.loginService.login().subscribe(user => {
      if(user) {
        localStorage.setItem("user",JSON.stringify(user));
        this.router.navigate(["/home"]);
      }
    })
  }

}
