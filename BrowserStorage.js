import React, { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !department) return;
    const newEmployee = { id: Date.now(), name, department };
    setEmployees([...employees, newEmployee]);
    setName("");
    setDepartment("");
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div>
      <h2>Employee Data</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button type="submit">Add Employee</button>
      </form>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} — {emp.department}
            <button onClick={() => handleDelete(emp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
