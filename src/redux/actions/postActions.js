import { ActionTypes } from "../constants/action-types";


export const fetchSuccess = (posts) => {
    return {
        type: ActionTypes.GET_POSTS_SUCCESS,
        payload: posts
    }
}