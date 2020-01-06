import React from 'react';

function Current(props){
if(props.forecast){
  console.log('current props',props)
  console.log('current props',props.forecast.main)

  return(
  <div>
      <div>current weather </div>
      <div>
       Current Temp: {props.forecast.main.temp}
     </div>
     <div>
        Real Feal: {props.forecast.main.feels_like} 
     </div>
     <div>
        Low: {props.forecast.main.temp_min} High: {props.forecast.main.temp_max}
     </div>
     <div>
        Humidity: {props.forecast.main.humidity}
     </div>
  </div>
  )
}
else{  
  return(
    <></>
  )
}
}

export default Current