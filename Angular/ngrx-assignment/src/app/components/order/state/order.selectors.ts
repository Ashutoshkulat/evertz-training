import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from './order.state';

const getOrdersState = createFeatureSelector<OrderState>('orders');

export const getOders = createSelector(getOrdersState,(state)=>{
    return state.orders
})