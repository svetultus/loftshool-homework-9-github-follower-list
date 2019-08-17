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
  // console.log('getApiKey', getApiKey);
  // const result = yield call(getApiKey);
  // let state1 = yield select(state => state);
  try {
    let ApiKey = yield select(state => getApiKey(state));
    let data = yield call(getUserInfo, ApiKey, action.payload);
    console.log('data', data);
    yield put(fetchRequestSuccess(data));
  } catch (error) {
    yield put(fetchRequestFailure(error));
  }

  // debugger;
  // console.log(getApiKey());
  // getUserInfo(ApiKey, action.payload).then(data => {
  //   console.log(data);
  //   yield put(fetchRequestSuccess(data));
  // });
}

export default fetchUserWatcher;
