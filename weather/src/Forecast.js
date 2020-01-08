import React from 'react';
import DayForecast from './DayForecast'

function Forecast(props){
  if(props.forecast){
    console.log('forecast props',props)
    console.log('forecast props',props.forecast.list[0].weather[0].description)
    
    let foreData = props.forecast.list
    let dailyData = foreData.map((day,dt) => {
      if(day.dt_txt.includes("12:00:00")){
      return(
        <div className="row dailyforecast">
        
            {/* <Link to = {"/dailyforecast/"+day.dt_txt}> */}
              <div>
              <DayForecast key = {dt}
                          date = {day.dt_txt}
                          temp = {day.main.temp}
                          RealFeal = {day.main.feels_like}
                          desc = {day.weather[0].description}/>
              </div>
              {/* </Link> */}
                
        </div>

      )
      }
    })
    

return(
  <div className="forecast">

      {dailyData}

  </div>
);
  }
  else{
    return(
    <></>
    )
  }
}

export default Forecast