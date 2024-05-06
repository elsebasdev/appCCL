import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { POSRoutingModule } from './pos-routing.module';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    POSRoutingModule,
    SharedModule
  ]
})
export class POSModule { }
