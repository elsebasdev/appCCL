export interface CreateDto {
    productName: string;
    idSupplier: number;
    idCategory: number;
    quantityPerUnit: string;
    unitPrice: number;
    unitsInStock: number;
    discontinued: boolean;
}