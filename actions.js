// src/redux/actions.js

// Action to add an employee
export const addEmployee = (employee) => ({
  type: 'ADD_EMPLOYEE',
  payload: employee
});

// Action to remove an employee
export const removeEmployee = (id) => ({
  type: 'REMOVE_EMPLOYEE',
  payload: id
});
