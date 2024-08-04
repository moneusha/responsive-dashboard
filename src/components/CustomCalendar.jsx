import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';

const CustomCalendar = () => {
  const [value, setValue] = React.useState(new Date());

  return (
    <div className="card calendar-container">
      <Calendar
        onChange={setValue}
        value={value}
        className="custom-calendar"
      />
    </div>
  );
};

export default CustomCalendar;
