import React from "react";
import { Link } from 'react-router-dom'

function Current(props) {
  if (props.current) {
    console.log('current props',props)
    // console.log('current props',props.current.main)
      let temp = Math.round(props.current.main.temp)
      let realTemp = Math.round(props.current.main.feels_like)
      let lowTemp = Math.round(props.current.main.temp_min)
      let hiTemp = Math.round(props.current.main.temp_max)
      let humidity = Math.round(props.current.main.humidity)
      let iconUrl = (`http://openweathermap.org/img/wn/${props.current.weather[0].icon}@2x.png`)
      // .round(props.current.main.temp)
      console.log(temp)
    return (
      <div>
        <div className="currdetail">
            <h1>{props.city.city}, {props.city.state} </h1>

            <div>Current Temp: {temp}</div>
            <div>Real Feel: {realTemp}</div>
            <div>Low: {lowTemp} High: {hiTemp}</div>
            <div>Humidity: {humidity}%</div>
        </div>
        <img src={iconUrl}></img>
        <div>
            <div className="daily">
            
              <Link to = {"/forecast/"+ props.city.city}><button>5 day Forecast</button></Link>
              
            
            </div>
            <div className="hourly">
              <Link to = {"/hourly/"+ props.city.city}><button>Hourly</button></Link>
              </div>

        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Current;
