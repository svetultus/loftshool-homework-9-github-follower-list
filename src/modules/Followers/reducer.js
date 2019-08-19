import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { actionChannel } from 'redux-saga/effects';
import { createSelector } from 'reselect';

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
  state => state.followers.data,
  data => {
    if (!data) return null;
    return data;
  }
);

export const getIsLoading = createSelector(
  state => state.followers.isLoading,
  isLoading => isLoading
);

export const getError = createSelector(
  state => state.followers.error,
  error => error
);

export default combineReducers({ isLoading, data, error });
