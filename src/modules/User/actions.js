import { createAction } from 'redux-actions';

// Реализуйте недостающие экшены
export const fetchRequest = createAction('FETCH_REQUEST');
export const fetchSuccess = createAction('FETCH_REQUEST_SUCCESS');
export const fetchFailure = createAction('FETCH_REQUEST_FAILURE');
