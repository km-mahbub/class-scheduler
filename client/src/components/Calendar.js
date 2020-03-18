import React from 'react';
import { withTranslation } from 'react-i18next';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; 

const Calendar = (props) => {
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
      header={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      events={[
        { title: 'event 1', start: '2020-03-16 10:00:00', end: '2020-03-16 12:00:00' },
        { title: 'event 2', start: '2020-03-19' }
      ]}
    />
  );
}

export default withTranslation()(Calendar);