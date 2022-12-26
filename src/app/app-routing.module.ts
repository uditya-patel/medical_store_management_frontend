import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
// import { EmployeeComponent } from './employee/employee.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';
import { AddEmployeeComponent} from './stocks/add-employee/add-employee.component' 
import { ProductHomeComponent } from './Products/home/home.component';
import { AddProductComponent } from './Products/add-products/add-product.component';
import { EditProductComponent } from './Products/edit-products/edit-product.component';
import { ViewProductComponent } from './Products/view-product/view-product.component';
import { UserNavComponent } from './navbar-user/user-nav/user-nav.component'
import { UserHomeComponent } from './User-home/user-home/user-home.component';
import { BillingComponent } from './billing/billing.component';
import { AddProductToBillComponent } from './add-product-to-bill/add-product-to-bill.component'
import { DisplayBillComponent } from './display-bill/display-bill.component';



// import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {path: '', redirectTo:'/login', pathMatch:'full'},
    // {path: 'register', component:RegisterComponent},
    {path: 'homepage', component:HomePageComponent},
    {path: 'login', component:LoginComponent},
    {path: 'employee', component:StoreComponent},
    // {path: 'admin', component:AdminComponent},
    // {path: 'employee', component:EmployeeComponent}, 
    {path: 'addemployee', component:AddEmployeeComponent},
    {path:'producthome',  component: ProductHomeComponent},
    {path:'productadd',  component: AddProductComponent},
    {path:'productedit/:id',  component: EditProductComponent},
    {path:'productview/:id',  component: ViewProductComponent},
    {path: ':id/employee' , component: UserNavComponent },
    {path:'employee/homepage', component:UserHomeComponent},
    {path:'billing', component:BillingComponent},
    {path:'billing/:id/addprodtobill', component:  AddProductToBillComponent },
    {path:'billing/:id/invoice', component:DisplayBillComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomePageComponent, LoginComponent]

