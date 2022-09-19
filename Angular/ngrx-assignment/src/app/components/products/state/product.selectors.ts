import { ProductState } from './product.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getProductsState= createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(getProductsState, (state)=>{
    return state.products
})

export const SearchProduct = createSelector(
  getProductsState,(state)=>{
    return state.searchProduct
  }
);