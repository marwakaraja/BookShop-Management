import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
login() {
this.router.navigate(['auth/login']);}

  registerForm!: FormGroup;
  currentuser:any;
  

  

  constructor( private fb:FormBuilder, 
    private authenticationService:AuthService,
    private router:Router ,
    private toastrService: ToastrService
   
    ){}
ngOnInit(): void {
 
  this.registerForm=new FormGroup({
    email :new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(3)]),
    username :new FormControl('', [Validators.required]),
    phone:new FormControl('', [Validators.required, Validators.minLength(5)])
    
  })
}
get f(){
  return this.registerForm.controls;
}


sendformdata() {
  console.log(this.registerForm.value);
 
 this.authenticationService.register(this.registerForm.value).subscribe(data =>{
  
 
 }
  
);
this.toastrService.success("you have created account please login");
 
this.router.navigate(['login']);


}
}
