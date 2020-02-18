import React from 'react';
import { useStateLink } from '@hookstate/core';

import stateLink from '../store/chat';

const JsonDump = () => {
  const state = useStateLink(stateLink);
  return <p>
      Last render at: {(new Date()).toISOString()} <br/>
      Current state: {JSON.stringify(state.value)}
  </p>
}

export default JsonDump;