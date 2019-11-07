import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {getUsersSaga} from './users';

export function* watchUsers() {
    yield takeEvery(actionTypes.GET_USERS, getUsersSaga);
}
