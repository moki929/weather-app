import React from 'react';
import './App.css';

const API = {
  apiKey: "",
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
      </main> 
    </div>
  );
}

export default App;