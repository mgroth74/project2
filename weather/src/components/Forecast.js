import React from "react";
import DayForecast from "./DayForecast";

function Forecast(props) {
  if (props.forecast) {
    let foreData = props.forecast.list;
    let dailyData = foreData.map((day, dt) => {
      if (day.dt_txt.includes("18:00:00")) {

        
        return (
          <div className="dayforecast" key={day.dt_txt}>
          <DayForecast 
            date={day.dt_txt}
            temp={day.main.temp}
            RealFeal={day.main.feels_like}
            desc={day.weather[0].description}
            icon={day.weather[0].icon}
            id={day.weather[0].id}
          />
          </div>
        );
      }
    });

    return <div className="fiveday">{dailyData}</div>;
  } else {
    return <></>;
  }
}

export default Forecast;
