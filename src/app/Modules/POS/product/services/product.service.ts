import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { ProductsDto } from '../interfaces/productDto.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateDto } from '../interfaces/createDto.interfaces';

@Injectable()
export class ProductService {

  public productDto!: ProductsDto[];
  private urlmodule:string = 'Product'

  constructor(private http: HttpClient) 
  {
    // this.productDto = [
    //   {
    //     idProduct: 1,
    //     productName: 'producto 1',
    //     supplier: 'nestle',
    //     category: 'comestibles',
    //     quantityPerUnit: 'docena',
    //     unitPrice: 2500 ,
    //     unitsInStock: 4 ,
    //     unitsOnOrder: 4 ,
    //     discontinued: false
    //   },
    //   {
    //     idProduct: 2,
    //     productName: 'productos 2',
    //     supplier: 'bimbo',
    //     category: 'arinas',
    //     quantityPerUnit: '18 tajadas' ,
    //     unitPrice: 5200,
    //     unitsInStock: 50,
    //     unitsOnOrder: 2 ,
    //     discontinued: false
    //   }
    // ]
  }

  GetProductsDto():Observable<ProductsDto[]>{
    return this.http.get<ProductsDto[]>(`${environment.BASEURL}${this.urlmodule}/Products`);
    // return this.productDto.length;
  }

  AddProductsDto(newproduct :CreateDto[]):Observable<boolean>{
    return this.http.post<boolean>(`${environment.BASEURL}${this.urlmodule}`,newproduct);
    // return this.productDto.length;
  }

  // get GetProductsDto():ProductsDto[]{

  //   return [...this.productDto];

  // }
}
