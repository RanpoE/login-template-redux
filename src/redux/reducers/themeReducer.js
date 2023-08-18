import { ActionTypes } from "../constants/action-types";

// Take initial state and action
const initialState = false


export const themeReducer = (state=initialState, {type}) => {
    switch (type) {
        case ActionTypes.TOGGLE_DARKMODE:
            return !state
        default:
            return state
    }
}