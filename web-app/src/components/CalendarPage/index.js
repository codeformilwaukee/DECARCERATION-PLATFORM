import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const CalendarPage = () => {
  const myEvents = [
      {
      title: 'major hacks 1',
      start: new Date('January 1, 2020 08:24:00'),
      end: new Date('January 7, 2020 12:24:00'),
    },
    {
      title: 'major hacks 2',
      start: new Date('January 8, 2020 08:24:00'),
      end: new Date('January 25, 2020 12:24:00'),
    },
    {
      title: 'major hacks 3',
      start: new Date('January 26, 2020 08:24:00'),
      end: new Date('February 4, 2020 12:24:00'),
    }
  ];

  return (
    <div style={{
      position: 'absolute', 
      left: '50%', 
      top: '50%',
      transform: 'translate(-50%, -50%)',
      marginTop: "200px"}}>
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        style={{height: "800px", width: "1200px"}}
      />
    </div>
);
}

export default CalendarPage;
