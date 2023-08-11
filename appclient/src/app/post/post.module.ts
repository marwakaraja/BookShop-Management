import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
  
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:"",component:IndexComponent},
      {path:"view/:id",component:ViewComponent},
      {path:"edit/:id",component:EditComponent},
      {path:"create",component:CreateComponent}



    ])
  ]
})
export class PostModule { }
