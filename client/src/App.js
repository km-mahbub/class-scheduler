import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Please Wait. Coming Soon...
        </a>
        {hasError ? null : <div>{message}</div>}
      </header>
    </div>
  );
}

export default App;
