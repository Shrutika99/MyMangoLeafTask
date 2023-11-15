import React, { useState } from 'react';
import './App.css';

const employeeData = [
  { id: 1, name: 'Ramesh', department: 'IT' },
  { id: 2, name: 'Suresh', department: 'HR' },
  { id: 3, name: 'Rajesh', department: 'IT' },
 
];

function App() {
  const [filter, setFilter] = useState('');

  const filteredEmployees = employeeData.filter(employee =>
    employee.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Employee List</h1>
      <input
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredEmployees.map(employee => (
          <li key={employee.id}>
            <strong>{employee.name}</strong> - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
