// src/redux/store.js
import { createStore } from 'redux';
import { employeeReducer } from './employeeReducer';

// Create the Redux store
export const store = createStore(
  employeeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
