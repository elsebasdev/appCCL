import { Component, OnInit } from '@angular/core';
import { ProductsDto } from '../../interfaces/productDto.interfaces';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-product-page',
  templateUrl: './list-product-page.component.html',
  styleUrl: './list-product-page.component.css'
})
export class ListProductPageComponent implements OnInit {

  public productsDto:ProductsDto[] = [];
  public isloading = false;

  constructor(private pService: ProductService){
    console.log('Constructor iniciado....');
    this.pService.GetProductsDto().subscribe(product => this.productsDto = product);
    this.isloading = true;
  }
  ngOnInit(): void {
    this.listProduct;
  }

  get listProduct():ProductsDto[]{
    return [...this.productsDto]
  }
}
