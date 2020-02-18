import React from 'react';
import { useStateLink } from '@hookstate/core';

import stateLink from '../store/chat';

const PriorityView = () => {
  const state = useStateLink(stateLink);
  return <p>
      Last render at: {(new Date()).toISOString()} <br/>
      <span>Task priority: {state.value.priority} </span>
      <button onClick={() => state.nested.priority.set(p => p + 1)}>Increase priority</button>
  </p>
}

export default PriorityView;