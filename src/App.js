import React, {useState} from 'react';
import apiKey from './config.js';
import 'tachyons';


const API = {
  apiKey: apiKey,
  base: "https://api.openweathermap.org/data/2.5/" 
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter") {
      fetch (`${API.base}weather?q=${query}&units=metric&APPID=${API.apiKey}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

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
    <div className={(typeof weather.main != "undefined") ? (weather.main.temp > 25 ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type ="text"
            className="search-bar"
            placeholder="Where to?"
            onChange={e=>setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div> 
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className= "temp-box">
                <div className="temp">
                {Math.round(weather.main.temp)} &#8451;
                </div>
              <div className= "tc weather" >{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main> 
    </div>
  );
}

export default App;