import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GuardService } from './services/guard.service';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)=> {

let currentUser = localStorage.getItem("token");

// 👇 Redirects to another route

if (currentUser !=null) {
  return inject(Router).navigate(["welcome/subject"]);
}


// 👇 Grants or deny access to this route
return inject(Router).navigate(["auth/login"]);
};

