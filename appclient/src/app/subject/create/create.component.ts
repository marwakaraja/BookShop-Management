import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
   
  constructor(
    public subjectService: SubjectService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      subjectName: new FormControl('', [Validators.required]),
      subjectDescription: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.subjectService.create(this.form.value).subscribe(res => {
         console.log('subject created successfully!');
         
    })
  }
  

}
