// Import the necessary action types
import { ActionTypes } from "../constants/action-types";

// Define the initial state
const initialState = {
    posts: [],
    error: null
};

// Define the post reducer function
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                error: null
            };
        case ActionTypes.GET_POSTS_FAILURE:
            return {
                ...state,
                posts: [],
                error: action.payload
            };
        case ActionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                error: null
            };
        case ActionTypes.ADD_POST_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case ActionTypes.UPDATE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload.id ? action.payload : post
                ),
                error: null
            };
        case ActionTypes.UPDATE_POST_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case ActionTypes.DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload),
                error: null
            };
        case ActionTypes.DELETE_POST_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default postReducer;
