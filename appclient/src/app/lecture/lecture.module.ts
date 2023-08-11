import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LectureComponent } from './lecture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddlectureComponent } from './addlecture/addlecture.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    LectureComponent,
    AddlectureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:"",component:LectureComponent},
      {path:"addLecture",component:AddlectureComponent}
      

    ])
  ]
})
export class LectureModule { }
