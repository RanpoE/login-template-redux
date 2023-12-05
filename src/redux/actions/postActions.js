import { ActionTypes } from "../constants/action-types";


export const fetchSuccess = (posts) => {
    return {
        type: ActionTypes.GET_POSTS_SUCCESS,
        payload: posts
    }
}

export const deletePost = (id) => {
    return {
        type: ActionTypes.DELETE_POST_SUCCESS,
        payload: id
    }
}