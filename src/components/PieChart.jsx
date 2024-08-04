import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import './PieChart.css';

const data = [
  { name: 'Your Files', value: 63 },
  { name: 'System', value: 25 },
  { name: 'Others', value: 12 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const CustomPieChart = () => {
  return (
    <div className="custom-pie-chart">
      <h3>Your Pie Chart</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
