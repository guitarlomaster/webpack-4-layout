import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    users: null,
    error: false,
    error_body: null
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
                error: false,
                error_body: null
            };
        case actionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                error_body: null,
                users: action.users
            };
        case actionTypes.GET_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                error_body: action.error,
                users: null
            };
        default:
            return state;
    }
};
export default users;
