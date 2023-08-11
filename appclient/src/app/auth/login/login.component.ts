import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
register() {
this.router.navigate(['/auth/register']);}
  loginForm!: FormGroup;
  currentuser:any;
  

  

  constructor( private fb:FormBuilder, 
    private authenticationService:AuthService,
    private router:Router ,
    private spinner: NgxSpinnerService
    
    ){}
ngOnInit(): void {
 
  this.loginForm=new FormGroup({
    email :new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required, Validators.minLength(3)])
    
  })
  
    
  
}
get f(){
  return this.loginForm.controls;
}


sendformdata() {
 // this.loginInfo=form.value;
console.log(this.loginForm.value);
 this.authenticationService.login(this.loginForm.value).subscribe(data =>{
  
  this.spinner.show();
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.router.navigate(['welcome']);
  }, 5000);
  
  

  
})

}}