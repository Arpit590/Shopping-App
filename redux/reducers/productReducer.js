import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "../constants/actionTypes";



export const productReducer=(state={products:[]}, action)=>{
        switch(action.type){
            case SET_PRODUCTS: 
                return {...state, products:action.payload}

            default:
                return state
        }
}

export const selectProductReducer=(state={product:[]}, action)=>{
        switch(action.type){
            case SELECTED_PRODUCT:
                return{...state, product:{...action.payload}}
            case REMOVE_SELECTED_PRODUCT:
                return {}
            default:
                return state
        }
}

export const addToCartReducer = (state={cart:[]}, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return{...state, 
                cart: [...state.cart, action.payload]}
        case REMOVE_FROM_CART:
            return {cart:[]}
        default:
            return state
    }
}


