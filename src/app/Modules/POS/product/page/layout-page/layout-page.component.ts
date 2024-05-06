import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../../../shared/interfaces/menuItem.interfaces';
import { ProductService } from '../../services/product.service';
import { ProductsDto } from '../../interfaces/productDto.interfaces';
import { CreateDto } from '../../interfaces/createDto.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent implements OnInit {

  public menuItem! : Menu[];
  public moduleInternal: string = "Home"
  public countproduct:number = 0;
  public productsDto:ProductsDto[] = [];
  public isloading = false;

  constructor(private pService: ProductService){
    console.log('Constructor iniciado....');
    this.pService.GetProductsDto().subscribe(product => this.productsDto = product);
  }
  
  getproduct():void{
    
    console.log(this.productsDto);

  }

  ngOnInit(): void {
    
    this.menuItem = [
      {
        name:'Home',
        route: './home',
        logo:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"
      },
      {
        name:'List-product',
        route: './list-product',
        logo:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"
      },
      {
        name:'Add-product',
        route: './add-product',
        logo:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"
      }
    ]
    // console.log(this.countproduct);
    // console.log(this.ProductsDto);


    
    // console.log(this.ProductsDto);
  }

}
