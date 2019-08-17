import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchRequest,
  fetchRequestSuccess,
  fetchRequestFailure
} from './actions';
import { actionChannel } from 'redux-saga/effects';
import { createSelector } from 'reselect';

// Обратите внимание на тесты, они помогут вам написать код редьюсера
const isLoading = handleActions(
  {
    [fetchRequest]: state => true,
    [fetchRequestSuccess]: state => false,
    [fetchRequestFailure]: state => false
  },
  false
);

const data = handleActions(
  {
    [fetchRequest]: state => null,
    [fetchRequestSuccess]: (state, action) => action.payload,
    [fetchRequestFailure]: state => null
  },
  null
);

const error = handleActions(
  {
    [fetchRequest]: state => null,
    [fetchRequestSuccess]: state => null,
    [fetchRequestFailure]: (state, action) => action.payload
  },
  null
);

export const getData = createSelector(
  state => state.user.data,
  data => {
    if (!data) return null;
    const { avatar_url: image, login, name, bio: summary } = data;
    return { login, image, name, summary };
  }
);

export const getIsLoading = createSelector(
  state => state.user.isLoading,
  isLoading => isLoading
);

export const getError = createSelector(
  state => state.user.error,
  error => error
);

export default combineReducers({ isLoading, data, error });
