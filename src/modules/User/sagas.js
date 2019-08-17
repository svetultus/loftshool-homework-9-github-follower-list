import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getUserInfo } from './api';
import { getApiKey } from '../Auth';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  try {
    let ApiKey = yield select(getApiKey);
    let data = yield call(getUserInfo, ApiKey, action.payload);
    yield put(fetchSuccess(data));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default fetchUserWatcher;
