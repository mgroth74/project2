import React from "react";
import moment from "moment";

function Hourly(props) {

  let newDate = new Date(props.date);

  let realDate = newDate.getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[realDate];

  let dateArr = props.date.split(" ");
  let time = moment(dateArr[1], "h:mm A")
    .subtract("hours", 6)
    .format("h:mm A");

  let forTemp = Math.round(props.temp);
  let forRealTemp = Math.round(props.RealFeal);

  let iconUrl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return (
    <>
      <div>{day}</div>
      <div>{time}</div>
      <div>Temp: {forTemp}</div>
      <div>Real Feel: {forRealTemp}</div>
      <img src={iconUrl} alt=""></img>
      <div>{props.desc}</div>
    </>
  );
}
export default Hourly;
