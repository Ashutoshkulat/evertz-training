import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const reqProduct = createAction(
    '[product ] request product',
)

export const productSuccess = createAction(
    '[product ] product Success',
    props<{ products: Product[] }>()
)

export const searchProduct = createAction(
  '[product Actions] Search Product',
  props<{ searchProduct: string }>()
);