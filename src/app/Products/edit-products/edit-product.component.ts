import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../service/http-provider.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  editProductForm: productForm = new productForm();

  @ViewChild("productForm")
  productForm!: NgForm;

  isSubmitted: boolean = false;
  productId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.getProductDetailById();
  }

  getProductDetailById() {
    this.httpProvider.getProductDetailById(this.productId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editProductForm.Id = resultData.id;
          this.editProductForm.FirstName = resultData.firstName;
          this.editProductForm.LastName = resultData.lastName;
          this.editProductForm.Email = resultData.email;
          this.editProductForm.Address = resultData.address;
          this.editProductForm.Phone = resultData.phone;
        }
      }
    },
      (error: any) => { });
  }

  EditProduct(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveProduct(this.editProductForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }
}

export class productForm {
  Id: number = 0;
  FirstName: string = "";
  LastName: string = "";
  Email: string = "";
  Address: string = "";
  Phone: string = "";
}
