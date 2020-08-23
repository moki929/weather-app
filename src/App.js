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
          <input type ="text"/>
        </div> 
    </div>
  );
}

export default App;

