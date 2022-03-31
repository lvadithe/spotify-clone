import React, { useEffect, useState } from 'react';
import Login from './components/Principal/Login/Login';
import Player from './components/Principal/Player/Player';
import { getTokenFromUrl } from './config/spotify';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
    console.log('I have a token', token);
  }, [token]);

  return (
    <div className='App'>
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
      
    </div>
  )
}

export default App
