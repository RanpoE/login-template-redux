import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { themeReducer } from "./themeReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    user: userReducer,
    theme: themeReducer,
})

export default reducers