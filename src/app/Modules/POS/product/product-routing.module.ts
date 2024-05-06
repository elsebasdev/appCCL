import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { ListProductPageComponent } from './page/list-product-page/list-product-page.component';
import { AddProductPageComponent } from './page/add-product-page/add-product-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {
        path:'home',
        component:HomePageComponent
      },
      {
        path:'list-product',
        component:ListProductPageComponent
      },
      {
        path:'add-product',
        component:AddProductPageComponent
      },
      {
        path:'**',
        redirectTo:'home',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
