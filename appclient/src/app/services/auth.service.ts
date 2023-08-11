import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/user';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = "https://localhost:7265/api/Users";

  constructor(
    private router: Router,
    private http: HttpClient
) {
  
}


getusers(){
    return this.http.get(this.apiURL);

}



login(user:any) {
    return this.http.post(this.apiURL+'/Login', user)
        .pipe(map(user => {
            localStorage.setItem('token', JSON.stringify(user));
           
        }));
}



register(user: IUser) {
    return this.http.post(this.apiURL+'/Register', user);
}

}
