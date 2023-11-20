import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { themeReducer } from "./themeReducer";
import  postReducer  from "./postReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    user: userReducer,
    theme: themeReducer,
    post: postReducer
})

export default reducers