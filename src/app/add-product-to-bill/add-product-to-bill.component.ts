import { Component } from '@angular/core';
import {BillingComponent} from '../billing/billing.component'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { ActivatedRoute, Router } from '@angular/router';

interface Product {
        productName: string,
        productDescription: string,
        productCompany: string,
        productPrice: number,
        productQuantity: number,
        productBatchNo: string,
        productExpiryDate: string,
        productUrl: string
}

@Component({
  selector: 'app-add-product-to-bill',
  templateUrl: './add-product-to-bill.component.html',
  styleUrls: ['./add-product-to-bill.component.css']
})
export class AddProductToBillComponent {

  public href: string = "";
  productList: any = [];
  searchText: string = "";
  url = "http://localhost:8080/user/getAllProducts";

  constructor( private http: HttpClient, private route: ActivatedRoute, private router: Router ) { }
  Token: string = `Bearer ${localStorage.getItem("token")}`

  
  ngOnInit(): void {
    this.getUser();
  }
  
  async getUser(){
    let headers = new HttpHeaders({
      'Authorization': this.Token,
      'Content-Type': 'application/json'
    });
    this.http.get(this.url, {headers:headers}).subscribe((res)=>this.productList = res)
    console.log(this.productList)
  }

  addProdToList(product:any){
    let headers = new HttpHeaders({
      'Authorization': this.Token,
      'Content-Type': 'application/json'
    });
    console.log(product.productId)
    this.href = this.router.url
    const myArray = this.href.split("/");
    console.log(myArray)
    const url = `http://localhost:8080/user/addProductToBill?billId=${myArray[2]}&productId=${product.productId}&productQuantity=1`
    console.log(url)
    let user = {}
    this.http.post<any>(url,user ,{headers:headers}).subscribe((res)=> console.log(res))

  }

  submit(){
    this.href = this.router.url
    const myArray = this.href.split("/");
    let url = `billing/${myArray[2]}/invoice`
    console.log(url)
    this.router.navigate([url])
      
  }

  product1 :Product[]=this.productList
  filteredCars: Product[] = [];

  applyFilter(filterValue: string) {
    // filterValue = filterValue.trim(); // Remove whitespace
    // // La ligne ci-dessous permet de reinitialiser le tableau
    // this.product1 = this.filteredCars;
    // this.product1 = this.product1.filter((product:Product ) =>
    // product.productName.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);


  }  
  


}
