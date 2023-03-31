import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MainsliderComponent } from './mainslider/mainslider.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoriessliderComponent } from './categoriesslider/categoriesslider.component';
import { CategorysdetailsComponent } from './categorysdetails/categorysdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    ProductsComponent,
    ProductdetailsComponent,
    MainsliderComponent,
    CategoriessliderComponent,
    CategorysdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
