import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:IUser[]=[];
  imagewidth:number=50;
  imagemargin:number=2;
  title:string="users page"

  constructor( private userService: AuthService , private router:Router){

  }

  ngOnInit(): void {
    this.userService.getusers().subscribe((data: any)=>{
      this.users = data;
     
      }) ;

  }
  

}
