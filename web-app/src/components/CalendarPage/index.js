import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NewCalendarEntryModal from './NewCalendarEntryModal';
import ExistingCalendarEntryModal from './ExistingCalendarEntryModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Config from '../../config';

const googleFormDateTimeToJSDate = (date, time) => {
  // CST only
  
  // date must be in format mm/dd/yyyy or m/d/yyyy or mm/d/yyyy or m/dd/yyyy
  // not the best verification method, but good for now
  if (!((date.match(/\//g) || []).length === 2 && (time.match(/:/g) || []).length === 2)) {
    // console.log((date.match(/\//g) || []).length);
    // console.log((time.match(/:/g) || []).length);
    return undefined;
  }
  const monthI = date.search(/\//);
  const month = parseInt(date.substring(0, monthI));

  const dayI = date.substring(monthI+1).search(/\//) + monthI + 1;
  const day = parseInt(date.substring(monthI+1, dayI));

  const yearI = date.substring(dayI+1).search(/\//) + dayI + 2;
  const year = parseInt(date.substring(yearI));

  const hoursI = time.search(/:/);
  const isPM = time.substring(time.length -2) === 'PM';

  const hourRaw = parseInt(time.substring(0, hoursI));
  const hours = isPM ? hourRaw + 12 : hourRaw;

  const minutesI = time.substring(hoursI+1).search(/:/)+hoursI+1;
  const minutes = parseInt(time.substring(hoursI+1, minutesI));

  const datetime = new Date(year, month, day, hours, minutes, 0, 0);
  return datetime;
}

const getSheetyEvents = () => {
  let events = [];

  const sheetyURL = 'https://api.sheety.co/eec8e466a41d19c1856d37f3a49d8fb2/wdp:CalendarEvents/formResponses1';
  
  fetch(sheetyURL)
  .then((response) => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return [];
    }
    
    response.json().then((data) => {
      if (data.formResponses1) {
        data.formResponses1.forEach((formResponse) => {
          if (formResponse.dateOfTheEvent && formResponse.timeWhenTheEventBegins && formResponse.timeWhenTheEventEnds) {
            const start = googleFormDateTimeToJSDate(formResponse.dateOfTheEvent, formResponse.timeWhenTheEventBegins);
            const end = googleFormDateTimeToJSDate(formResponse.dateOfTheEvent, formResponse.timeWhenTheEventEnds);

            const event = {
              title: formResponse.nameOfTheEvent,
              start: start, // more work to do here
              end: end,
              hostOrg: formResponse.sponsoringOrganization,
              registration: formResponse['onlineRegistrationLink (orAContactEmail)'],
              chargeYesNo: formResponse['isThereAMonetaryChargeForAttendingTheEvent?'],
              frequency: formResponse.howOftenDoesThisEventOccur,
              description: formResponse['description (include:What,Why,AndThePurposeOfTheEvent)'],
              address: formResponse['addressOfEvent (ifApplicable)']
            };
  
            events.push(event);
          } else {
            // console.log("could not accept, ", data);
          }
        });
      }
    })
    .catch(err => {
      console.log("json() err", err);
    });
  })
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
  
  return events;
}

const getAirtableEvents = (airtableEndpointURL, airtableBase, airtableAPIKey, tableName) => {
  let events = [];
  const airtableURL = airtableEndpointURL + "/v0/" + airtableBase + "/" + tableName + "/?api_key=" + airtableAPIKey;
  
  fetch(airtableURL)
    .then(res => res.json())
    .then(res => {
      console.log(res.records);
      events = res.records;
      if (res.records !== undefined && res.records.length > 0) {
        const eventsStripppedFromTotalTable = events.filter(eventObj => eventObj.fields["Event Starts"] !== undefined)
        // console.log(eventsStripppedFromTotalTable);
        
        const calEvents = eventsStripppedFromTotalTable.map(e => {
          return {
            title: e.fields['Name of the Event'],
            description: e.fields['Description (Include: What, Why, and the purpose of the event)'],
            start: new Date(e.fields['Event Starts']), // more work to do here
            end: new Date(e.fields['Event Ends']),
            hostOrg: e.fields['Sponsoring Organization'],
            registration: e.fields['Online Registration Link'],
            email: e.fields['Email Contact'],
            charge: e.fields['If there is a charge, how much is it in USD? (ex. $20.00)'],
            frequency: e.fields['How often does this event occur?'],
            address: e.fields['Address of Event (if applicable)']
          };
        })
        console.log("calEvents", calEvents);
        
        return calEvents;
      }
    })
    .catch(error => {
      console.log("err", error);
    });
  return events;
}

const getEvents = () => {
  let events = [];
  events = getAirtableEvents(Config.airtable.endpointUrl, Config.airtable.calendarEventsBase, Config.airtable.apiKey, Config.airtable.calendarEventsTableName);
  return events;
}

const localizer = momentLocalizer(moment);
//initialData
const myEvents = [
  {
    title: 'Test',
    start: new Date('January 1, 2020 08:24:00'),
    end: new Date('January 7, 2020 12:24:00'),
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
      description:event.description,
      start:event.start,
      end:event.end
    })
  }

  const handleSelectExisting = event => {
    setSelectedEvent(event)
    toggleExisting(); 
  }

  useEffect(() => {
    const formEvents = getEvents();
    if (formEvents.length === 0) {
      toast.error("Whoops. The website had a problem accessing WDP's events.\nSorry about this. We're working hard to get this fixed.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    console.log("set events", formEvents);
    setEvents(formEvents);
    console.log("now events", events);
  }, events)

  //this makes sure that currEvent isn't added to events before currEvents receives data from child
  useEffect(() => {
    if(currEvent.title !== initialCurrEvent.title) {
      let joined = events.concat(currEvent);
      setEvents(joined);
      setCurrEvent(initialCurrEvent);
    }
  }, [events, currEvent]);

  console.log("finna render", events);
  return (
    <div 
      className="calendar"
      style={{
        marginBottom: "1em",
        marginTop: "1em"
    }}>
      <Calendar
        selectable
        localizer={localizer}
        events={events} 
        // onSelectSlot={handleSelectNew}
        onSelectEvent={handleSelectExisting}
        startAccessor="start"
        endAccessor="end"
        style={{height: "800px", width: "100%"}}
      />
      <NewCalendarEntryModal modal={newEventModal} toggle={toggleNew}  handleCreate={handleCreate} start={currEvent.start} end={currEvent.end} />
      <ExistingCalendarEntryModal modal={existingEventModal} toggle={toggleExisting} event={selectedEvent}/>
      <ToastContainer />
    </div>
);
}

export default CalendarPage;
