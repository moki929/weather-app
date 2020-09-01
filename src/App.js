import React from 'react';
import apiKey from './config.js';
import 'tachyons';


const API = {
  apiKey: apiKey,
  base: "https://api.openweathermap.org/data/2.5/" 
}

function App() {

  const dateBuilder = (d) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let day = days[d.getDate()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

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
          <div className="location tc">Mumbai , India</div> 
          <div className="date location tc">{dateBuilder(new Date())}</div>
        </div>
        <div className= "temp-box" >
          <div className="tc temp">30 &#8451;</div>
        </div>
        <div className= "tc weather" >sunny</div>
      </main> 
    </div>
  );
}

export default App;