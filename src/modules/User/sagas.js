import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import {
  fetchRequest,
  fetchRequestSuccess,
  fetchRequestFailure
} from './actions';
import { getUserInfo } from './api';
import { getApiKey } from '../Auth';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  try {
    let ApiKey = yield select(state => getApiKey(state));
    let data = yield call(getUserInfo, ApiKey, action.payload);
    yield put(fetchRequestSuccess(data));
  } catch (error) {
    yield put(fetchRequestFailure(error));
  }
}

export default fetchUserWatcher;
