import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NewCalendarEntryModal from './NewCalendarEntryModal';
import ExistingCalendarEntryModal from './ExistingCalendarEntryModal';

const localizer = momentLocalizer(moment);
//initialData
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

//initialstate

const initialCurrEvent = {
title: "",
start: "",
end: "",
repeat: false,
description: "",
location: "",
}
const CalendarPage = () => {
  
  
  const [newEventModal, setNewEventModal] = useState(false);
  const [existingEventModal, setExistingEventModal] = useState(false);
  const [events, setEvents] = useState(myEvents);
  const [currEvent, setCurrEvent] = useState(initialCurrEvent);
  const [selectedEvent, setSelectedEvent] = useState(initialCurrEvent);
  
  //functions
  const toggleNew = () => {setNewEventModal(!newEventModal)}
  const toggleExisting = () => {setExistingEventModal(!existingEventModal)}

  const handleSelectNew = ({start, end}) => {
    setCurrEvent({...currEvent,start:start,end:end})
    toggleNew();
  }

  const handleCreate =  (event) => {
    setCurrEvent({
      ...currEvent,
      title:event.title,
      location:event.location,
      repeat:event.repeat,
      description:event.description
    })
  }

  const handleSelectExisting = event => {
    setSelectedEvent(event)
    toggleExisting(); 
  }
  console.log(events)
    //this makes sure that currEvent isn't added to events before currEvents receives data from child
  useEffect(()=>{
    if( currEvent.title !== initialCurrEvent.title){
      let joined = events.concat(currEvent)
      setEvents(joined)
      setCurrEvent(initialCurrEvent)
    }
  },[events,currEvent])

  
  return (
    <div 
      class="main"
      style={{
        marginBottom: "1em",
        marginTop: "1em"
    }}>
      <Calendar
        selectable
        localizer={localizer}
        events={events} 
        onSelectSlot={handleSelectNew}
        onSelectEvent={handleSelectExisting}
        startAccessor="start"
        endAccessor="end"
        style={{height: "800px", width: "100%"}}
      />
      <NewCalendarEntryModal modal={newEventModal} toggle={toggleNew}  handleCreate={handleCreate} />
      <ExistingCalendarEntryModal modal={existingEventModal} toggle={toggleExisting} event={selectedEvent}/>
    </div>
);
}

export default CalendarPage;
