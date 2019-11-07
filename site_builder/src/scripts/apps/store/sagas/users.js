import {put} from 'redux-saga/effects';

import * as actions from '../actions';
import axios from '../../axios/main';

export function* getUsersSaga() {
    yield put(actions.getUsersRequested());
    try {
        const res = yield axios.get('/users?page=1&per_page=5');
        yield put(actions.getUsersSuccess(res.data));
    } catch (err) {
        yield put(actions.getUsersFail(err));
    }
}
