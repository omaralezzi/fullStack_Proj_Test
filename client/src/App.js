//import "./App.css";
import React from "react";
import { Routes, Route, NavLink as Link } from "react-router-dom";
import GET from "./components/GET";
import POST from "./components/POST";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">GET USERS - GET request</Link>
          </li>
          <li>
            <Link to="/create-user">CREATE A USER - POST request</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<GET />}></Route>
          <Route path="/create-user" element={<POST />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
