import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ServiceService {
 
  url = "http://localhost:8080/user/createBill?productId=6&productQuantity=10";
  constructor( private http: HttpClient ) { }

  Token: string = `Bearer ${localStorage.getItem("token")}`

  saveUser(data:any){
    let headers = new HttpHeaders({
      'Authorization': this.Token,
      'Content-Type': 'application/json'
    });
    return this.http.post(this.url, data, {headers:headers})
  }
}
