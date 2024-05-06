import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CreateDto } from '../../interfaces/createDto.interfaces';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css'
})
export class AddProductPageComponent {

  public isSave: boolean = false;

constructor(private pservice:ProductService){}

  public createDto : CreateDto[] =[
    { 
      productName: "Poker litron",
      idSupplier: 1,
      idCategory: 1,
      quantityPerUnit: "330ml",
      unitPrice: 3000,
      unitsInStock: 500,
      discontinued: false,
    }
  ] 

  async addproductEmit(){
    await this.pservice.AddProductsDto(this.createDto).subscribe( result => {
      
      
      this.isSave = result
      if (this.isSave) {
        console.log("producto Guardado");
      }else{
        console.log("nose guardo nada");
      }
    
    });

    
  }




}
