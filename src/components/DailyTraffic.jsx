import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './DailyTraffic.css';

const data = [
  { name: '04', visitors: 1000 },
  { name: '06', visitors: 2000 },
  { name: '08', visitors: 3000 },
  { name: '10', visitors: 4000 },
  { name: '12', visitors: 5000 },
  { name: '14', visitors: 6000 },
  { name: '16', visitors: 7000 },
];

const DailyTraffic = () => {
  return (
    <div className="daily-traffic">
      <h3>Daily Traffic</h3>
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
          <Bar dataKey="visitors" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyTraffic;
