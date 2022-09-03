import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const str: any = localStorage.getItem("user");
      const user = JSON.parse(str);
      
      let result = false;
      if(user) {
        route.data["roles"].forEach((role:string) => {
          if(role === user.role){
            result = true;
          } 
        })
      }
      
    return result;
  }
  
}
