import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DayForecast from './DayForecast';
import Hourly from './Hourly';

function HourForecast(props){
  if(props.forecast){
    console.log('hourforecast props',props)
    console.log('hourforecast props',props.forecast.list[0].weather[0].description)
    
    let hourData = props.forecast.list
    let hourlyData = hourData.map((hour,dt) => {
    
      return(
        <Container>
          <Row>
            <Col xs={5} className="mb-5" key={`{hour.id}`}>
              <Hourly date = {hour.dt_txt}
                          temp = {hour.main.temp}
                          RealFeal = {hour.main.feels_like}
                          desc = {hour.weather[0].description}
                          icon = {hour.weather[0].icon}
                          id= {hour.weather[0].id}/>
               </Col>
          </Row>
        </Container>

      )
      
    })
    

return(
  <div className="forecast">

      {hourlyData}

  </div>
);
  }
  else{
    return(
    <></>
    )
  }
}

export default HourForecast