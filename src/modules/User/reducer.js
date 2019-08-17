import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { actionChannel } from 'redux-saga/effects';
import { createSelector } from 'reselect';

// Обратите внимание на тесты, они помогут вам написать код редьюсера
const isLoading = handleActions(
  {
    [fetchRequest]: state => true,
    [fetchSuccess]: state => false,
    [fetchFailure]: state => false
  },
  false
);

const data = handleActions(
  {
    [fetchRequest]: state => null,
    [fetchSuccess]: (state, action) => action.payload,
    [fetchFailure]: state => null
  },
  null
);

const error = handleActions(
  {
    [fetchRequest]: state => null,
    [fetchSuccess]: state => null,
    [fetchFailure]: (state, action) => action.payload
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
