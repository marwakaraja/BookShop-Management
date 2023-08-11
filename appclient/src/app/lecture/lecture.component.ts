import { Component } from '@angular/core';
import { ILecture } from '../interfaces/lecture';
import { LectureService } from '../services/lecture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent {
  lectures: ILecture[] = [];
  id!:number;
  p: number = 1;
  
  total: number = 0;
  
   
  constructor(public lectureService: LectureService , public route: ActivatedRoute) { }
    
  ngOnInit(): void {
    this.id = this.route.snapshot.params['subjectid'];
    this.getbooks();
    
    
  }

  getbooks(){

    this.lectureService.getAll(this.id).subscribe((data: ILecture[])=>{
      this.lectures = data;
      this.total =data.length;
      console.log(this.lectures);})  

  }

    public download(lectureFileName: string):void
  {
    this.lectureService.downloadlecture(lectureFileName).subscribe(response=>
      {
      let filename= response.headers.get('content-disposition')?.split(';')[1].split('=')[1];
      let blob:Blob=response.body as Blob;
      let a = document.createElement('a');
      a.download!=filename;
      a.href=window.URL.createObjectURL(blob);
      a.click();
      });
  }
    
  deleteBook(id:number){
    this.lectureService.delete(id).subscribe(res => {
         this.lectures = this.lectures.filter(item => item.lectureId !== id);
         console.log('subject deleted successfully!');
    })
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.getbooks();
}



}
