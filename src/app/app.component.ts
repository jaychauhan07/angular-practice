import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';

  constructor(private router: Router) {}

  logout = () => {
    localStorage.removeItem("user");
    this.router.navigate(["/home"]);
    console.log("Test");
  }
}
