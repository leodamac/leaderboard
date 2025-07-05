import React, { useEffect } from 'react';
import io from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

const SOCKET_SERVER_URL = "http://localhost:3001";

function App() {
  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    socket.on('connect', () => {
      console.log('Connected to backend server!');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from backend server.');
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Leaderboard Frontend. Check the browser console for connection status.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
