import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { UsersComponent } from './users/users.component';





@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,

    
    RouterModule.forChild([
      {path:"",component:RegisterComponent},
      {path:"login",component:LoginComponent},
      {path:"users",component:UsersComponent}
      


    ])
  ]
})
export class AuthModule { }
