import { Subject } from 'rxjs';

import EventService from '../services/eventService';

const subject = new Subject();
const initialState = {
  data: []
};

let state = initialState;

const eventStore = {
  init: () => subject.next(state),
  subscribe: setState => subject.subscribe(setState),
  fetchEventData: async () => {
    const eventService = new EventService();
    const newData = await eventService.fetchEvents();
    state = {
      ...state,
      data: newData
    };
    subject.next(state);
  },
  reset: () => {
    state = initialState;
    subject.next(state);
  },
  initialState
};

export default eventStore;