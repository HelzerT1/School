// src/EmployeeList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEmployee, removeEmployee } from './redux/actions';
import './EmployeeList.css';

function EmployeeList() {
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const name = prompt('Enter employee name:');
    if (name) {
      const newEmployee = { id: Date.now(), name };
      dispatch(addEmployee(newEmployee));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeEmployee(id));
  };

  return (
    <div className="employee-container">
      <h2>Employee Management</h2>
      <button className="add-btn" onClick={handleAdd}>Add Employee</button>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name}
            <button className="remove-btn" onClick={() => handleRemove(emp.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
