import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren : () => import('./Modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'pos',
    loadChildren : () => import('./Modules/POS/pos.module').then(m => m.POSModule)
  },
  {
    path:'**',
    redirectTo:'auth',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
