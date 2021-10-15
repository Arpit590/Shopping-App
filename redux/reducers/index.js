import {combineReducers} from "redux";
import { addToCartReducer, productReducer, selectProductReducer } from "./productReducer";
import { userReducer } from "./userReducer";


export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectProductReducer,
    cart: addToCartReducer,
    user: userReducer,
})