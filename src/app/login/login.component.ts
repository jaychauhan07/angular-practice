import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : any;
  password: any;
  redirectUrl: any;
  constructor(private loginService: LoginService, 
              private router: Router, 
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.redirectUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    console.log("this.redirectUrl",this.redirectUrl);
  }

  login = () => {
    this.loginService.login().subscribe(user => {
      if(user) {
        localStorage.setItem("user",JSON.stringify(user));
        this.router.navigate([this.redirectUrl]);
      }
    })
  }

}
