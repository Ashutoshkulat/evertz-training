import { createReducer, on } from '@ngrx/store';
import { addorder } from './order.actions';
import { initialState } from './order.state';


const _orderReducer = createReducer(
    initialState,
    on(addorder, (state, action)=>{
        let order = {...action.order};

        return{
            ...state,
            orders:[...state.orders, order],
        }
    })
)

export function orderReducer(state, action){
    return _orderReducer(state, action);
}