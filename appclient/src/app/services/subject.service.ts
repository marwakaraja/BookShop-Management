import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ISubject } from '../interfaces/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private apiURL = "https://localhost:7265/api/Subjects";
     
 
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL )

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(subject:any): Observable<any> {

    return this.httpClient.post(this.apiURL , subject)

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
}

