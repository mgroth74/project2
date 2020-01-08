import React, { useState } from 'react';
import './App.css';
import Current from './Current'
import Forecast from './Forecast'

function Zipcode() {

  let [zipCode, setZipCode] = useState();
  let [current, setCurrent] = useState();
  let [forecast, setForecast] = useState();
  let [lat, setLat] = useState();
  let [long, setLong] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    setZipCode(e.target.value)
            
    let zipUrl = (`http://www.zipcodeapi.com/rest/js-d6H98R7dZhT6ETYdgmtEQHgXaqk0TL1YhNxFSFvKxjpq6gr6vfGmJG7JaPQZvZbe/info.json/${zipCode}/degrees`)
 
      fetch(zipUrl)
            .then(res => res.json())
            .then(zipData => {
              setLat(zipData.lat)
              setLong(zipData.lng)
                  let curUrl = (`https://api.openweathermap.org/data/2.5/weather?lat=${zipData.lat}&lon=${zipData.lng}&units=imperial&APPID=e95bfbd83c1ae67e534b8f31127d5c83`)    
                  console.log(curUrl)
                    fetch(curUrl)
            
                    .then(res => res.json())
                    .then(curData => {
                      setCurrent(curData)
                      })
                    .catch(err => {console.log(err)})
                  
                        let forUrl = (`https://api.openweathermap.org/data/2.5/forecast?lat=${zipData.lat}&lon=${zipData.lng}&units=imperial&APPID=e95bfbd83c1ae67e534b8f31127d5c83`)    
                        console.log(forUrl)
                          fetch(forUrl)
                  
                          .then(res => res.json())
                          .then(forData => {
                            setForecast(forData)
                            })
                          .catch(err => {console.log(err)})
            })
            .catch(err => {console.log(err)})

          
     }    
  
  
  const handleChange = (e) =>{
    e.preventDefault()
    setZipCode(e.target.value)
    console.log('handle change', e.target.value)
   
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        ZipCode:
          <input 
            type="text" 
            placeholder=" " 
            value= {zipCode}
            onChange={ (e) => handleChange(e)}
          />
          <button >Submit</button>
        </form>

      <Current current = {current}/>
      <div>
      <Forecast forecast = {forecast}/>
      </div>
    </div>
  );
}

export default Zipcode;
