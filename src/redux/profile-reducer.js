import { profileAPI, usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const DELETE_POST = 'DELETE-POST';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you ?', likesCount: 1 },
        { id: 2, message: `It's my first post`, likesCount: 4 }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newMessage = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newMessage],
                newPostText: ''
            };
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST, postId
    }
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersApi.getProfile(userId)
    dispatch(setUserProfile(response.data));
}


export default profileReducer;