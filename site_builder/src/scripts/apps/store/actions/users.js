import * as actionTypes from './actionTypes';

export const getUsers = () => {
    return {
        type: actionTypes.GET_USERS
    }
};

export const getUsersRequested = () => {
    return {
        type: actionTypes.GET_USERS_REQUESTED
    }
};

export const getUsersSuccess = (users) => {
    return {
        type: actionTypes.GET_USERS_SUCCESS,
        users: users
    }
};

export const getUsersFail = (err) => {
    return {
        type: actionTypes.GET_RESOURCES_FAIL,
        error: err
    }
};


