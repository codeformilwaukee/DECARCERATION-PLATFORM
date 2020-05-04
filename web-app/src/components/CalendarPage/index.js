import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NewCalendarEntryModal from './NewCalendarEntryModal';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {

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
  const [modal, setModal] = useState(false);
  const [events, setEvents] = useState(myEvents);
  const [currEvent, setCurrEvent] = useState(initialCurrEvent);
  
  //functions
  const toggle = () => {setModal(!modal)}

  const handleSelect = ({start, end}) => {
    
    setCurrEvent({...currEvent,start:start,end:end})
    toggle();
  }

 
  const handleCreate =  (event) => {
    setCurrEvent({
      ...currEvent,
      title:event.title,
      location:event.location,
      repeat:event.repeat,
      description:event.description
      
    })
    console.log(currEvent)
    
  }

    //this makes sure that currEvent isn't added to events before currEvents receives data from child
  useEffect(()=>{
    
    
    setEvents([...events,currEvent])
    setCurrEvent(initialCurrEvent)
  },[currEvent.title])

  
  return (
    <div style={{
      position: 'absolute', 
      left: '50%', 
      top: '50%',
      transform: 'translate(-50%, -50%)',
      marginTop: "200px"}}>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        onSelectSlot={handleSelect}
        startAccessor="start"
        endAccessor="end"
        style={{height: "800px", width: "1200px"}}
      />
      <NewCalendarEntryModal modal={modal} toggle={toggle}  handleCreate={handleCreate} />
    </div>
);
}

export default CalendarPage;
