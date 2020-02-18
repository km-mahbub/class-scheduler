import React from 'react';
import { useStateLink } from '@hookstate/core';

import stateLink from '../store/chat';

const TaskView = () => {
  const state = useStateLink(stateLink);
  return <p>
    Last render at: {(new Date()).toISOString()} <br />
    <span>Task name: {state.value.task} </span>
    <input value={state.value.task} onChange={e => state.nested.task.set(e.target.value)} />
  </p>
}
export default TaskView;