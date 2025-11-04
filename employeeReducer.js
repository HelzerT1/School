// src/redux/employeeReducer.js

// Initial app state
const initialState = {
  employees: []
};

// Reducer function that defines how the state changes
export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };

    case 'REMOVE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.filter(emp => emp.id !== action.payload)
      };

    default:
      return state;
  }
};
