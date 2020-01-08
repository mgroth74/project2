import React from 'react';

function DayForecast(props){
  console.log('daily',props.date)
  // if(props.date.includes("12:00:00")){

  let newDate = new Date(props.date);
  console.log('newdate',newDate)
  let realDate = newDate.getDay();
  console.log('realDate',realDate)
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satruday"]
  let day = days[realDate]
return(
  <div className="dayforecast">
    
      <div>{day}</div>
      <div>Temp: {props.temp}</div>
      <div>Real Feel: {props.RealFeal}</div>
      <div>{props.desc}</div>

     

  </div>
);


}

export default DayForecast