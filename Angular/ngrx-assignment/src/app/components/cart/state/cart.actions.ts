import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";


export const ADD_TO_CART = '[cart page] add to cart';
export const DELETE_CART_ACTION = '[cart page] delete cart';

export const addToCart = createAction(ADD_TO_CART, props<{cart:Product}>());

export const deleteCart = createAction(
  DELETE_CART_ACTION,
  props<{ id: number }>()
);