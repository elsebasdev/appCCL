import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ListProductPageComponent } from './page/list-product-page/list-product-page.component';
import { AddProductPageComponent } from './page/add-product-page/add-product-page.component';
import { LastProductComponent } from './components/last-product/last-product.component';
import { CountProductComponent } from './components/count-product/count-product.component';
import { HightSoldProductsComponent } from './components/hight-sold-products/hight-sold-products.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationInterceptor } from '../../auth/services/authentication-interceptor.interceptor';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    ListProductPageComponent,
    AddProductPageComponent,
    LastProductComponent,
    CountProductComponent,
    HightSoldProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  providers:[
    ProductService
  ]
})
export class ProductModule { }
