import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  isLoggedIn = true;
  
 
isAuthenticated(){

  if (localStorage.getItem('token')!=null)

    return this.isLoggedIn;
     else
     return false;
  }

  constructor() { }
}
