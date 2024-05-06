import { Component, Input, OnInit, output } from '@angular/core';
import { Menu } from '../../interfaces/menuItem.interfaces';

@Component({
  selector: 'app-nav-bar-modular',
  templateUrl: './nav-bar-modular.component.html',
  styleUrl: './nav-bar-modular.component.css'
})
export class NavBarModularComponent implements OnInit {

  @Input()
  public menuItems!: Menu[];

  ngOnInit(): void {


    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
