import React, { useState } from "react";
import { Route } from "react-router-dom";
import Current from "./Current";
import Forecast from "./Forecast";
import HourForecast from "./HourForecast";

function ZipCode(props) {
  let [zipCode, setZipCode] = useState();
  let [city, setCity] = useState();
  let [current, setCurrent] = useState();
  let [forecast, setForecast] = useState();

  if (props === null) {
    setZipCode(null);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setZipCode(e.target.value);
    console.log('submit',zipCode)

    let zipUrl = `https://www.zipcodeapi.com/rest/js-d6H98R7dZhT6ETYdgmtEQHgXaqk0TL1YhNxFSFvKxjpq6gr6vfGmJG7JaPQZvZbe/info.json/${zipCode}/degrees`;
    console.log('url',zipUrl)
    fetch(zipUrl)
      .then(res => res.json())
      .then(zipData => {
        setCity(zipData);
        console.log('lat',zipData)

        let curUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${zipData.lat}&lon=${zipData.lng}&units=imperial&APPID=e95bfbd83c1ae67e534b8f31127d5c83`;

        fetch(curUrl)
          .then(res => res.json())
          .then(curData => {
            setCurrent(curData);
          })
          .catch(err => {
            console.log(err);
          });

        let forUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${zipData.lat}&lon=${zipData.lng}&units=imperial&APPID=e95bfbd83c1ae67e534b8f31127d5c83`;

        fetch(forUrl)
          .then(res => res.json())
          .then(forData => {
            setForecast(forData);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    e.preventDefault();
    setZipCode(e.target.value);
    console.log('click',zipCode)
  };

  return (
    <div className="zipcode">
      <form className="zipform" onSubmit={e => handleSubmit(e)}>
      
        <input className="zipform"
          size="80"
          id="zipInput"
          type="text"
          placeholder="Search location by Zip"
          value={zipCode}
          onChange={e => handleChange(e)}
        />
        <button className="zipform"><i className="fa fa-search"></i></button>
      </form>

      <Current current={current} city={city} />
      <main>
        <Route
          path="/forecast/:daily"
          render={() => <Forecast forecast={forecast} />}
        />
        <Route
          path="/hourly/:hourly"
          render={() => <HourForecast forecast={forecast} />}
        />
      </main>
    </div>
  );
}

export default ZipCode;
