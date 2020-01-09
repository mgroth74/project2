import React from 'react';
import { Link, Route } from 'react-router-dom'
import './App.css';
import ZipCode from './components/Zipcode'



function App() {

  return (
    <div className="App">
      <header className="header">
 
          <div className="title">
            <Link to='/'>
              <div>Your local weather</div>
            </Link> 
          </div>

          <div className="zip">
          <div>testffff</div>
          </div>
       
      </header>
       <main>
          <div>
            <Route path="/" componet = {ZipCode}/>
            
            {/* render={() => <ZipCode/>}/> */}

          </div>
        </main>
     
      <div>
          {/* <div>
          <ZipCode/>
          </div> */}
      </div>
      
    </div>
  );
}

export default App;
