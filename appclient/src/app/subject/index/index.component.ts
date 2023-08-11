import { Component } from '@angular/core';
import { ISubject } from 'src/app/interfaces/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  subjects: ISubject[] = [];
   
  constructor(public subjectService: SubjectService) { }
    
  ngOnInit(): void {
    this.subjectService.getAll().subscribe((data: ISubject[])=>{
      this.subjects = data;
      console.log(this.subjects);
    })  
  }
    
  deletesubject(id:number){
    this.subjectService.delete(id).subscribe(res => {
         this.subjects = this.subjects.filter(item => item.subjectId !== id);
         console.log('subject deleted successfully!');
    })
  }

}
