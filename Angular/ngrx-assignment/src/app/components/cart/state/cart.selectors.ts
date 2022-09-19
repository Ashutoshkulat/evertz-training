import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { CartState } from './cart.state';


const getCartState = createFeatureSelector<CartState>('carts');

export const getCart = createSelector(getCartState, (state)=>{
    return state.carts
})
