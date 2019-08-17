import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';
import { createSelector } from 'reselect';

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey

const isAuthorized = handleActions(
  {
    [addApiKey]: (state, action) => (action.payload !== '' ? true : false)
  },
  false
);
const apiKey = handleActions(
  {
    [addApiKey]: (state, action) => action.payload
  },
  null
);

export const getIsAuthorized = createSelector(
  state => state.auth.isAuthorized,
  isAuthorized => isAuthorized
);

export const getApiKey = createSelector(
  state => state.auth.apiKey,
  apiKey => apiKey
);

export default combineReducers({ isAuthorized, apiKey });
