import React from 'react';
import { withTranslation } from 'react-i18next';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; 

const EventCalendar = (props) => {

  return (
    <FullCalendar 
      defaultView="timeGridWeek" 
      weekends={false} 
      allDaySlot={false}
      plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]} 
      minTime="08:00:00"
      selectable={true}
      selectMirror={true}
      selectOverlap={false}
      select={props.handleSelect}
      header={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      events={props.eventsData}
    />
  );
}

export default withTranslation()(EventCalendar);