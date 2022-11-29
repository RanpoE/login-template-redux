import { ActionTypes } from "../constants/action-types";

// Take initial state and action
const initialState =  [{
        id: 1,
        title: "Initial product",
        category: "INIT"
    }]


export const productReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            console.log("HELLO")
            return  [...state, payload]
        case ActionTypes.UPDATE_PRODUCT:
            return state.map(product => {
                if(product.id===payload.id) {
                    return payload // replace all
                    // return {...product, title: "value"}
                }
                return product
            })
        default:
            return state
    }
}