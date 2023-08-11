import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {

  myimage:string="assets/images/book.png";
  constructor(private router:Router){}
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
}


}
