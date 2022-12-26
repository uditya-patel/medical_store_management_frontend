import { Component } from '@angular/core';
import { ServiceService } from './service.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})


export class BillingComponent {

  url = "http://localhost:8080/user/createBill?productId=6&productQuantity=10";

  billUserData: any = {
    customerName: "",
    phoneNo:"",
    age:"",
    sex:"",
    address:"",
    totalAmount: 0
  }
 
  data: any = {};
  
  constructor(private userData: ServiceService,  private http: HttpClient, private _router:Router ) { }

  Token: string = `Bearer ${localStorage.getItem("token")}`

  onSubmit(){
    let headers = new HttpHeaders({
      'Authorization': this.Token,
      'Content-Type': 'application/json'
    });
    this.http.post(this.url, this.billUserData, {headers:headers}).subscribe((res)=>{
      console.log(res)
       this.data = res;
      let url = `billing/${this.data.billId}/addprodtobill`
      console.log(url)
      this._router.navigate([url])
    }
    // err =>{console.log(err.message)}
    )
  }

}
//  export const value = temp;