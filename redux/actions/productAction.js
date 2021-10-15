import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "../constants/actionTypes"


export const setProducts=(products)=>{
    return{
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product)=>{
    return{
        type: SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = ()=>{
    return{
        type: REMOVE_SELECTED_PRODUCT
    }
}