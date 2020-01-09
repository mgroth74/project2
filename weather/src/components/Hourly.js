import React from "react";


function Hourly(props){ 
  console.log('daily',props.date)
  // if(props.date.includes("12:00:00")){

  let newDate = new Date(props.date);
  console.log('hournewdate',newDate)
  let realDate = newDate.getDay();
  console.log('realDate',realDate)
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = days[realDate]

  let dateArr = props.date.split(" ");
  let time = moment("8:32 AM", 'h:mm A').subtract('hours', 2).format('h:mm A')
  console.log(time)

  let forTemp = Math.round(props.temp)
  let forRealTemp = Math.round(props.RealFeal)

  let iconUrl = (`http://openweathermap.org/img/wn/${props.icon}@2x.png`)

return(
  <div className="dayforecast">
    
      <div>{day}</div>
      <div>{props.date}</div>
      <div>Temp: {forTemp}</div>
      <div>Real Feel: {forRealTemp}</div>
      <img src={iconUrl}></img>
      <div>{props.desc}</div>

     

  </div>
);


}
export default Hourly