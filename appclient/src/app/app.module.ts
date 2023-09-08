import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { guardGuard } from './guard.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    BrowserAnimationsModule,


    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:"auth",loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
      {path:"welcome",loadChildren:()=>import('./welcome/welcome.module').then(m=>m.WelcomeModule)},
      {path:"home",loadChildren:()=>import('./home/home/home.module').then(m=>m.HomeModule)},

      {path:'' ,redirectTo:'auth',pathMatch:'full'},
      {path:'**' ,redirectTo:'auth',pathMatch:'full'},

      


  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
