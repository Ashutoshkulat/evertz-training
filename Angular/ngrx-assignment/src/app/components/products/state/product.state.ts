import { Product } from "src/app/models/product.model";


export interface ProductState{
    products: Product[],
    searchProduct:string
}

export const initialState: ProductState = {
  products: [],
  searchProduct: '',
};