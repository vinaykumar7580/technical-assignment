
import React, { useState } from 'react';
import "./Calendar.css";

function Calendar({ selectedDate, onDateSelect }) {
  const [date, setDate] = useState(selectedDate || new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days = [];
    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
      days.push(new Date(day));
    }
    return days;
  };

  const handleDateClick = (day) => {
    if (onDateSelect) {
      onDateSelect(day);
    }
  };

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  const daysInMonth = getDaysInMonth(date);
  const monthName = date.toLocaleString('default', { month: 'long' });

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{monthName}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <br/>
      <div className="calendar-days">
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${
              selectedDate && day.toDateString() === selectedDate.toDateString()
                ? 'selected'
                : ''
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
