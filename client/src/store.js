import { createStateLink } from '@hookstate/core';

let initiaState = {
  priority: 0, 
  task: 'Untitled Task',
  loader: false
}

const stateLink = createStateLink(initiaState);

export default stateLink;