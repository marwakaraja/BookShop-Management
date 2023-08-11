import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ViewComponent,
    CreateComponent,
    UpdateComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:"",component:IndexComponent},
      {path:"view/:subjectid",component:ViewComponent},
      {path:"edit/:subjectid",component:UpdateComponent},
      {path:"createSubject",component:CreateComponent},
      {path:":subjectid/lectures",loadChildren:()=>import('../lecture/lecture.module').then(m=>m.LectureModule)},


    ])
  ]
})
export class SubjectModule { }
