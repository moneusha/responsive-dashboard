import React from 'react';
import './CheckTable.css';

const CheckTable = () => {
  const data = [
    { name: "Horizon UI PRO", progress: "17.5%", quantity: 2458, date: "24.Jan.2021" },
    { name: "Horizon UI Free", progress: "10.8%", quantity: 1485, date: "12.Jun.2021" },
    { name: "Weekly Update", progress: "21.3%", quantity: 1024, date: "5.Jan.2021" },
    { name: "Venus 3D Asset", progress: "31.5%", quantity: 858, date: "7.Mar.2021" },
    { name: "Marketplace", progress: "12.2%", quantity: 258, date: "17.Dec.2021" },
  ];

  return (
    <div className="card check-table">
      <h2>Check Table</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Progress</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{item.name}</td>
              <td>{item.progress}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckTable;
