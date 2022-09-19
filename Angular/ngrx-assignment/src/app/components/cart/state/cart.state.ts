import { Product } from "src/app/models/product.model";


export interface CartState{
    carts:Product[];
};

export const initialState:CartState ={
    carts:[]
}