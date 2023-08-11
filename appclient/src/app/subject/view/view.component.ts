import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubject } from 'src/app/interfaces/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  id!: number;
  subject!: ISubject;
   
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
  }

}
