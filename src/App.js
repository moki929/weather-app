import React from 'react';
import apiKey from './config.js';


const API = {
  apiKey: apiKey,
  base: "https://api.openweathermap.org/data/2.5/" 
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type ="text"
            className="search-bar"
            placeholder="Where to?"
          />
        </div>
        <div className="location-box">
          <div className="location">Mumbai</div>
          <div className="date"></div>
        </div>
      </main> 
    </div>
  );
}

export default App;