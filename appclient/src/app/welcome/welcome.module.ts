import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomepageComponent } from './welcomepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { guardGuard } from '../guard.guard';



@NgModule({
  declarations: [
    WelcomepageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:"",component:WelcomepageComponent},
      {path:"subject",loadChildren:()=>import('../subject/subject.module').then(m=>m.SubjectModule)},
      {path:"post",loadChildren:()=>import('../post/post.module').then(m=>m.PostModule)},
      


      
    {path:"",component:WelcomepageComponent}
    
    ]),
    
    
  ]
})
export class WelcomeModule { }
