import React from 'react';
import './Tasks.css';

const tasks = [
  'Landing Page Design',
  'Dashboard Builder',
  'Mobile App Design',
  'Illustrations',
  'Promotional LP',
];

const Tasks = () => {
  return (
    <div className="tasks">
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
