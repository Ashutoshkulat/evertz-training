import { createAction, props } from "@ngrx/store";
import { Order } from 'src/app/models/order.model';

export const ADD_ORDER_ACTION = '[order page] add order';


export const addorder = createAction(ADD_ORDER_ACTION, props<{ order: Order }>());