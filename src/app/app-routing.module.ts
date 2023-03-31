import { CategorysdetailsComponent } from './categorysdetails/categorysdetails.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home' ,canActivate:[AuthGuard], component:HomeComponent},
  {path:'about' ,canActivate:[AuthGuard], component:AboutComponent},
  {path:'categories' , canActivate:[AuthGuard],component:CategoriesComponent},
  {path:'cart' , canActivate:[AuthGuard],component:CartComponent},
  {path:'brands' ,canActivate:[AuthGuard], component:BrandsComponent},
  {path:'productdetails/:id' ,canActivate:[AuthGuard], component:ProductdetailsComponent},
  {path:'categorysdetails/:id' ,canActivate:[AuthGuard], component:CategorysdetailsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'products' ,canActivate:[AuthGuard], component:ProductsComponent},
  {path:'**' , canActivate:[AuthGuard],component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
