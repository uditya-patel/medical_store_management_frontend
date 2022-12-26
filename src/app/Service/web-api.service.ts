import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  constructor(private httpClient: HttpClient) { }

  // Get call method
  // Param 1 : url
  get(url: string): Observable<any> {
    let Token: string = `Bearer ${localStorage.getItem("token")}`
    console.log(Token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Cache-Control' : 'no-cache',
        'Authorization': Token,

      }),
      observe: "response" as 'body'
    };
    return this.httpClient.get(
      url,
      httpOptions
    )
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }

  // Post call method 
  // Param 1 : url
  // Param 2 : model
  post(url: string, model: any): Observable<any> {

    let Token: string = `Bearer ${localStorage.getItem("token")}`
    console.log(Token)
    console.log(model)
    console.log(model.FirstName)
    let random = Math.floor(Math.random() * 90 + 10)
    const data = {
      firstName: model.FirstName,
      lastName: model.LastName,
      phoneNo: model.Phone,
      email: model.Email,
      address: model.Address,
      userId: random,
      password:"password"

    }
    console.log(data)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': Token
      }), 
     observe: "response" as 'body'
    };
    return this.httpClient.post(
      url,
      data,       //------->
      httpOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }
  private ReturnResponseData(response: any) {
    console.log("response:"+ response)
    return response;
  }
  private handleError(error: any) {
    return throwError(error);
  }
}