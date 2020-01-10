import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import ZipCode from "./components/Zipcode";

function App() {
  const resetComponent = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="title">
          <Link
            to="/"
            style={{ color: "whitesmoke", textDecoration: "none" }}
            onClick={resetComponent}
          >
            Your local weather
          </Link>
        </div>
      </header>
      <main>
        <div>
          <Route path="/" componet={ZipCode} />
        </div>
      </main>

      <div>
        <div>
          <ZipCode />
        </div>
      </div>
    </div>
  );
}

export default App;
