import React from "react";
import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link classname = "link" to='/' exact="true">Home</Link>
        <Link classname = "link" to='/contact' exact="true"> Contact</Link>
        <br/>
      </nav>
      <Routes>
        <Route path='/' exact="true" element={<Home />} />
        <Route path='/contact' exact="true" element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;
