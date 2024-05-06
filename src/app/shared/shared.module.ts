import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
import { NavBarModularComponent } from './components/nav-bar-modular/nav-bar-modular.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    NavBarModularComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    NavBarModularComponent
  ]
})
export class SharedModule { }
