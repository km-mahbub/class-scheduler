import { Subject } from 'rxjs';

const subject = new Subject();
const initialState = true

let state = initialState;

const drawerStore = {
  init: () => subject.next(state),
  subscribe: setState => subject.subscribe(setState),
  toggleOpen: (newState) => {
    state = newState;
    subject.next(state);
  },
  reset: () => {
    state = true;
    subject.next(state);
  },
  initialState
};

export default drawerStore;