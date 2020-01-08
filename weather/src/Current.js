import React from "react";

function Current(props) {
  if (props.current) {
    // console.log('current props',props)
    // console.log('current props',props.current.main)

    return (
      <div>
        <h1>Current Weather </h1>

        <div>Current Temp: {props.current.main.temp}</div>
        <div>Real Feal: {props.current.main.feels_like}</div>
        <div>
          Low: {props.current.main.temp_min} High: {props.current.main.temp_max}
        </div>
        <div>Humidity: {props.current.main.humidity}</div>
        <div>
          <span>hourly button</span><span>Radar</span>
          </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Current;
