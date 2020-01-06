import React, { useState, StrictMode } from 'react';
import './App.css';
import Current from './Current'

function Zipcode() {

  let [zipCode, setZipCode] = useState();
  let [forecast, setForecast] = useState();

  let lat = ""  
  let lng = ""


  const handleSubmit = (e) => {
    e.preventDefault()
    setZipCode(e.target.value)
            
    console.log('Handle Submit', zipCode)
    let zipUrl = (`http://www.zipcodeapi.com/rest/js-d6H98R7dZhT6ETYdgmtEQHgXaqk0TL1YhNxFSFvKxjpq6gr6vfGmJG7JaPQZvZbe/info.json/${zipCode}/degrees`)
 
      fetch(zipUrl)
            .then(res => res.json())
            .then(zipData => {
              lat = zipData.lat
              lng = zipData.lng
            })
            .catch(err => {console.log(err)})
          

     let wthUrl = (`https://api.openweathermap.org/data/2.5/weather?lat=41.61066&lon=-90.517021&units=imperial&APPID=e95bfbd83c1ae67e534b8f31127d5c83`)    
     console.log(wthUrl)
     fetch(wthUrl)
      
          .then(res => res.json())
          .then(wthData => {
            setForecast(wthData)
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

      <Current forecast = {forecast}/>
    </div>
  );
}

export default Zipcode;
