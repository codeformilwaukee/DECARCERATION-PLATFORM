import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const CalendarPage = () => {
  const myEvents = [
      {
      title: 'Surprise Party',
      start: new Date('October 18, 2019 03:24:00'),
      end: new Date('October 19, 2019 03:24:00'),
    }
  ];
  
  return (
    <div>
      <p>
      Welcome to the calendar!
      </p>
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
);
}

export default CalendarPage;
