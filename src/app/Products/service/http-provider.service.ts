import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8080/";

//var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllProducts: apiUrl + "admin/getAllProducts",
  deleteProductById: apiUrl + "admin/deleteProduct",
  getProductDetailById: apiUrl + "/api/employee/getProductDetailById",
  saveProduct: apiUrl + "/api/employee/saveProduct"
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllProducts(): Observable<any> {
    return this.webApiService.get(httpLink.getAllProducts);
  }

  public deleteProductById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteProductById + '?productId=' + model, "");
  }

  public getProductDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getProductDetailById + '?productId=' + model);
  }

  public saveProduct(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveProduct, model);
  }
  
}
