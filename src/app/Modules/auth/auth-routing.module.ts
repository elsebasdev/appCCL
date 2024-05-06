import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './Pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './Pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './Pages/register-pages/register-pages.component';
import { RecoveryPagesComponent } from './Pages/recovery-pages/recovery-pages.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPagesComponent,
    children:[
      {
        path:'login',
        component:LoginPagesComponent
      },
      {
        path:'register',
        component:RegisterPagesComponent
      },
      {
        path:'recovery',
        component:RecoveryPagesComponent
      },
      {
        path:'**',
        redirectTo:'login',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
