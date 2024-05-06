export interface ProductsDto {
    idProduct:       number;
    productName:     string;
    supplier:        string;
    category:        string;
    quantityPerUnit: string;
    unitPrice:       number;
    unitsInStock:    number;
    unitsOnOrder:    number;
    discontinued:    boolean;
}