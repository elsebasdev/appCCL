import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[
      {
        path:'home',
        component:HomePageComponent
      },
      {
        path:'product',
        loadChildren: ()=> import('./product/product.module').then(m => m.ProductModule)
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
export class POSRoutingModule { }
