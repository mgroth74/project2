import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Zipcode from './Zipcode'


function App() {
  return (
    <div className="App">
      
        <nav className="nav">
          <Link to='/'>
            <h1>Home</h1>
          </Link>
        </nav>
       <main>
          <div>
            <Route path="/" componenent={Zipcode}/>
            {/* <Route path="/dailyforecast/:dailyforecast"/> */}
          </div>
        </main>
     
      <div>
          <div>
          <Zipcode/>
          </div>
      </div>
      
    </div>
  );
}

export default App;
