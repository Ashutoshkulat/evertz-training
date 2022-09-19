import { Order } from 'src/app/models/order.model';

export interface OrderState {
  orders: Order[];
}

export const initialState: OrderState = {
  orders: [],
};