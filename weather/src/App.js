import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import Zipcode from './components/Zipcode'



function App() {

  return (
    <div className="App">
      
        <nav className="nav">
          <Link to='/'>
            <h1>Your local weather</h1>
          </Link>
        </nav>
       <main>
          <div>
            <Route path="/" componenent={Zipcode}/>

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
