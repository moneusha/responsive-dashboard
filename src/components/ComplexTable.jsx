import React from 'react';
import './ComplexTable.css';

const ComplexTable = () => {
  const data = [
    { name: "Horizon UI PRO", status: "Approved", date: "18 Apr 2022", progress: "80%" },
    { name: "Horizon UI Free", status: "Disable", date: "18 Apr 2022", progress: "60%" },
    { name: "Marketplace", status: "Error", date: "20 May 2021", progress: "30%" },
    { name: "Weekly Updates", status: "Approved", date: "12 Jul 2021", progress: "90%" },
  ];

  return (
    <div className="card complex-table">
      <h2>Complex Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.date}</td>
              <td>{item.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplexTable;
