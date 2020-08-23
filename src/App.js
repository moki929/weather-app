import React from 'react';
import './App.css';

const API = {
  apiKey: "",
  base: "https://api.openweathermap.org/data/2.5/" 
}

function App() {
  return (
    <div className="app">
        <div className="search-box">
<<<<<<< HEAD
          <input type ="text"/>
        </div> 
=======
          <input
            type ="text"
            className="search-bar"
            placeholder="Where to?"
          />
        </div>
        <div className="location-box">
          <div className="location"></div>
          <div className="date"></div>
        </div>
      </main> 
>>>>>>> c50b299bd663158674bee1966644d914385fd860
    </div>
  );
}

export default App;