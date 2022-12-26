import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-display-bill',
  templateUrl: './display-bill.component.html',
  styleUrls: ['./display-bill.component.css']
})
export class DisplayBillComponent {
  

  constructor( private http: HttpClient, private router: Router  ){}
  Token: string = `Bearer ${localStorage.getItem("token")}`
  
  productList: any = [];
  billBody:any = {}
  customer:any ={}

  printPage(){
    window.print()
  }
  ngOnInit(): void {
    this.getUser();
  }

  async getUser(){
    let headers = new HttpHeaders({
      'Authorization': this.Token,
      'Content-Type': 'application/json'
    });
    let href = this.router.url
    const myArray = href.split("/");
    console.log(myArray)
    let url =`http://localhost:8080/user/getBillById/${myArray[2]}`
    this.http.get(url, {headers:headers}).subscribe((res)=>this.billBody = res)
    this.productList = this.billBody.products
    console.log(this.productList)
  }



}
