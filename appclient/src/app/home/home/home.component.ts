import { Component, OnInit } from '@angular/core';
import { ILecture } from 'src/app/interfaces/lecture';
import { ISubject } from 'src/app/interfaces/subject';
import { LectureService } from 'src/app/services/lecture.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AllLectures!: ILecture[];

  constructor(private lectureService: LectureService){}
  ngOnInit(): void {
    this.lectureService.getAllLectures().subscribe((data: ILecture[])=>{
      this.AllLectures = data;
      
    })  
  }

}
