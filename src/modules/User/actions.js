import { createAction } from 'redux-actions';

// Реализуйте недостающие экшены
export const fetchRequest = createAction('FETCH_REQUEST');
export const fetchRequestSuccess = createAction('FETCH_REQUEST_SUCCESS');
export const fetchRequestFailure = createAction('FETCH_REQUEST_FAILURE');
