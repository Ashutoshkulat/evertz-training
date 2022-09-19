import { initialState } from './product.state';
import { createReducer, on } from "@ngrx/store";
import { productSuccess, searchProduct } from './product.actions';


const _productsReducer = createReducer(
  initialState,
  on(searchProduct, (state, action) => {
    return {
      ...state,
      searchProduct: action.searchProduct,
    };
  }),
  on(productSuccess, (state,action)=>{
    return {
        ...state,
        products : action.products
    }
  })
);

export function productsReducer(state, action){
    return _productsReducer(state, action)
}