import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchRequest,
  fetchRequestSuccess,
  fetchRequestFailure
} from './actions';
import { actionChannel } from 'redux-saga/effects';
import { createSelector } from 'reselect';

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
