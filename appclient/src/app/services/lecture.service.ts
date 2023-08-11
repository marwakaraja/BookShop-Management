import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ISubject } from '../interfaces/subject';
import { ILecture } from '../interfaces/lecture';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

 
  private apiURL = "https://localhost:7265/api/subjects";
  private apiURLfile = "https://localhost:7265/api/Files/Download";
  private apiURLLectures = "https://localhost:7265/api/Values";

     
 
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(subjectid:number): Observable<any> {

    return this.httpClient.get(this.apiURL+ '/' + subjectid +'/lectures')

    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllLectures(): Observable<any> {

    return this.httpClient.get(this.apiURLLectures)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(subjectid:number,data:ILecture) {
    let formdata = new FormData();
    formdata.append("lectureName",data.lectureName) ;
    formdata.append("LectureFileName",data.LectureFileName) ;
    formdata.append("LectureFile",data.LectureFile??"");

    return this.httpClient.post(this.apiURL+ '/' + subjectid +'/lectures' ,formdata)


    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  find(id:number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update(id:number, subject:ISubject): Observable<any> {

    return this.httpClient.put(this.apiURL + '/' + id, subject)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }
    
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
 }

 downloadlecture(filename:string){

  return this.httpClient.get(this.apiURLfile+'?filename='+filename,{observe:'response',responseType:'blob'}) .pipe(
    
    catchError(this.errorHandler)
  )

 }
}


