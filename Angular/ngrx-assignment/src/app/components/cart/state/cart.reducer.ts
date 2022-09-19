import { addToCart, deleteCart} from './cart.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './cart.state';


const _cartReducer = createReducer(
    initialState,
    on(addToCart, (state, action)=>{
        let cart = {...action.cart};
        return {
            ...state,
            carts:[...state.carts, cart],
        }
    }),
    on(deleteCart, (state, {id})=>{
        const updatedCart = state.carts.filter((cart)=>{
            return cart.id !== id
        });
        return{
            ...state,
            carts:updatedCart
        }
    })
)

export function cartReducer(state, action){
    return _cartReducer(state, action);
}