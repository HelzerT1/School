import React from "react";
import "./EmployeeList.css";

const EmployeeList = ({ employees, onDelete }) => {
  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found. Please add one!</p>
      ) : (
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>{emp.email}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
