import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchRequest,
  fetchRequestSuccess,
  fetchRequestFailure
} from './actions';
import { actionChannel } from 'redux-saga/effects';

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
    [fetchRequestSuccess]: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    [fetchRequestFailure]: state => null
  },
  null
);

// const ApiKey = (state => {
//   console.log(state);
//   return state;
// },
// null);

export default combineReducers({ isLoading, data });
