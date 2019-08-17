import { createAction } from 'redux-actions';

// Здесь не хватает экшенов для модуля FOLLOWERS.
// FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE
export const fetchRequest = createAction('FETCH_REQUEST');
export const fetchRequestSuccess = createAction('FETCH_SUCCESS');
export const fetchRequestFailure = createAction('FETCH_FAILURE');
