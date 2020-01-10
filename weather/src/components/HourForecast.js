import React from "react";
import Hourly from "./Hourly";

function HourForecast(props) {
  if (props.forecast) {
    let hourData = props.forecast.list;
    let hourlyData = hourData.map((hour, dt) => {
      return (
        <div className="hourforecast" key={hour.dt_txt}>
        <Hourly
          date={hour.dt_txt}
          temp={hour.main.temp}
          RealFeal={hour.main.feels_like}
          desc={hour.weather[0].description}
          icon={hour.weather[0].icon}
          id={hour.weather[0].id}
        />
        </div>
      );
    });

    return <div className="hour">{hourlyData}</div>;
  } else {
    return <></>;
  }
}

export default HourForecast;
