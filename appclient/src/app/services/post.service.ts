import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  


  private apiURL = "https://localhost:7265/api/Posts";
     
  
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL )

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(postTitle:string ,postBody:string) {
   console.log(postTitle +" "+ postBody)
    return this.httpClient.post<IPost>(this.apiURL ,{postTitle , postBody} )

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
     
  update(id:number, post:any): Observable<any> {

    return this.httpClient.put(this.apiURL + '/' + id, post)

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

