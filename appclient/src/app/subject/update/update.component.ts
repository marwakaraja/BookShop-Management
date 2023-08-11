import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubject } from 'src/app/interfaces/subject';
import { PostService } from 'src/app/services/post.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id!: number;
  subject!: ISubject;
  form!: FormGroup;
  
  constructor(
    public subjectService: SubjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['subjectid'];
    this.subjectService.find(this.id).subscribe((data: ISubject)=>{
      this.subject = data;
    });
    
    this.form = new FormGroup({
      SubjectName: new FormControl('', [Validators.required]),
      SubjectDescription: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.subjectService.update(this.id, this.form.value).subscribe(res => {
         console.log('subject updated successfully!');
         this.router.navigateByUrl('/post');
    })
  }
   
}


