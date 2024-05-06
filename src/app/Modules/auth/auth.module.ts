import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPagesComponent } from './Pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './Pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './Pages/register-pages/register-pages.component';
import { RecoveryPagesComponent } from './Pages/recovery-pages/recovery-pages.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './services/authentication-interceptor.interceptor';


@NgModule({
  declarations: [
    LayoutPagesComponent,
    LoginPagesComponent,
    RegisterPagesComponent,
    RecoveryPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
