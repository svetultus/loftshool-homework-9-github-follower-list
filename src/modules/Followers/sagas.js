import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import {
  fetchRequest,
  fetchRequestSuccess,
  fetchRequestFailure
} from './actions';
import { getFollowersInfo } from './api';
import { getApiKey } from '../Auth';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
  try {
    let ApiKey = yield select(state => getApiKey(state));
    let data = yield call(getFollowersInfo, ApiKey, action.payload);

    data = data.map(elem => {
      const { avatar_url: image, login } = elem;
      return { login, image };
    });

    yield put(fetchRequestSuccess(data));
  } catch (error) {
    yield put(fetchRequestFailure(error));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
