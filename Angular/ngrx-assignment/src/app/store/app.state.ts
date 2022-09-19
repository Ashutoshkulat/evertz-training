import { cartReducer } from '../components/cart/state/cart.reducer';
import { CartState } from '../components/cart/state/cart.state';
import { orderReducer } from '../components/order/state/order.reducer';
import { OrderState } from '../components/order/state/order.state';
import { productsReducer } from '../components/products/state/product.reducer';
import { ProductState } from './../components/products/state/product.state';


export interface AppState{
    products: ProductState
    carts: CartState
    orders: OrderState
}

export const appReducer = {
    products: productsReducer,
    carts:cartReducer,
    orders:orderReducer
}