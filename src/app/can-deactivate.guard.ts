import { EmployeeComponent } from './employee/employee.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<EmployeeComponent> {
  canDeactivate(
    component: EmployeeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(component.firstName != "" || component.lastName != "") {
        return confirm("Are you sure? You want to navigate. You have some unsaved changes.")
      }
    return true;
  }
  
}
