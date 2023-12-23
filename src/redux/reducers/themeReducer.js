import { ActionTypes } from "../constants/action-types";

// Take initial state and action
const initialState = true


export const themeReducer = (state=initialState, {type}) => {
    switch (type) {
        case ActionTypes.TOGGLE_DARKMODE:
            return !state
        default:
            return state
    }
}