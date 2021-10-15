import { LOGIN, LOGOUT } from "../constants/actionTypes";

export const userReducer = (state={user:null},action)=>{
    switch(action.type){
        case LOGIN:
            return{...state, user:action.payload}
        case LOGOUT:
            return{}
        default:
            return state
    }
}