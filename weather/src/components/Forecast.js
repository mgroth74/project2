import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DayForecast from './DayForecast';
// import DayDetail from './DayDetail';

function Forecast(props){
  if(props.forecast){
    console.log('forecast props',props)
    console.log('forecast props',props.forecast.list[0].weather[0].description)
    
    let foreData = props.forecast.list
    let dailyData = foreData.map((day,dt) => {
      if(day.dt_txt.includes("18:00:00")){
      return(
        <Container>
          <Row>
            <Col xs={5} className="mb-5" key={`{day.id}`}>
              <DayForecast date = {day.dt_txt}
                          temp = {day.main.temp}
                          RealFeal = {day.main.feels_like}
                          desc = {day.weather[0].description}
                          icon = {day.weather[0].icon}
                          id= {day.weather[0].id}/>
               </Col>
          </Row>
        </Container>

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