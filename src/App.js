import React from "react";
import './App.css';
import Home from "./Home";
import { Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link classname = "link" to='/' exact="true">Home</Link>
        <br/>
      </nav>
      <Routes>
        <Route path='/' exact="true" element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
