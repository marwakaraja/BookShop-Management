import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ILecture } from 'src/app/interfaces/lecture';
import { LectureService } from 'src/app/services/lecture.service';

@Component({
  selector: 'app-addlecture',
  templateUrl: './addlecture.component.html',
  styleUrls: ['./addlecture.component.css']
})
export class AddlectureComponent  implements OnInit{
  lecturefile!:File;

  frm!:FormGroup;
  id!:number;
  constructor( private lectureservice: LectureService, private fb:FormBuilder, public route: ActivatedRoute){}

  get f(){
    return this.frm.controls;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['subjectid'];
   this.frm= new FormGroup({
    
    ' lectureName': new FormControl(['',Validators.required]),
    'LectureFileName': new FormControl(['',Validators.required]),
    'LectureFile': new FormControl(['',Validators.required])
   
   })
  }
  onPost() {
    console.log(this.frm.value);
  const frmdata: ILecture=Object.assign(this.frm.value);
  frmdata. LectureFile=this.lecturefile;
  this.lectureservice.create(this.id,frmdata).subscribe();
  }

  onChange(event:any){
   this.lecturefile=event.target.Files[0];
   console.log( this.lecturefile);
   
  }

}
