import React, { useState, useEffect } from 'react';
import './App.css';
import { JsonDump, TaskView, PriorityView } from './components';

const App = () => {
  const [message, setMessage] = useState("");
  const [hasError, setErrors] = useState(false);

  const fetchData = async () => {
    const res = await fetch("https://api.classscheduler.tk");
    res
      .json()
      .then(res => setMessage(res.message))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="App">
      <h1>Class Scheduler</h1>
      <p>Our website is under construction.</p>
      {hasError ? null : <div>{message}</div>}
      <JsonDump />
      <TaskView />
      <PriorityView />
    </div>
  );
}

export default App;