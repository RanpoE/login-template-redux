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

export const searchPost = (text) => {
    console.log("searchPost")
    return {
        type: ActionTypes.SEARCH_POST,
        payload: text
    }
}

export const addPostSuccess = (post) => {
    return {
        type: ActionTypes.ADD_POST_SUCCESS,
        payload: post
    }
}