import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './WeeklyRevenue.css';

const data = [
  { name: '17', revenue: 4000 },
  { name: '18', revenue: 3000 },
  { name: '19', revenue: 2000 },
  { name: '20', revenue: 2780 },
  { name: '21', revenue: 1890 },
  { name: '22', revenue: 2390 },
  { name: '23', revenue: 3490 },
  { name: '24', revenue: 2000 },
  { name: '25', revenue: 2780 },
];

const WeeklyRevenue = () => {
  return (
    <div className="card weekly-revenue">
      <h3>Weekly Revenue</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyRevenue;
