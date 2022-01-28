import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom;
// component imports
import Home from './Home';
import AboutMe from '/AboutMe';
import Projects from './Projects';
import WorkHistory from './WorkHistory';
import Contact from './Contact';
import Footer from './Footer';



function App() {
  return (
    <>
    <div className="App">
      <h1>Hello portfolio!</h1>
    </div>
    <BrowserRouter>
    <div className="nav">
      <Navbar />
    </div>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/about-me" element={<AboutMe />} />
      <Route path = "/contact" element={<Contact />} />
      <Route path = "/projects" element={<Projects />} />
      <Route path = "/interests" element={<Interests />} />
      <Route path = "/work-history" element={<WorkHistory/>} />
    </Routes>
    </BrowserRouter>
    <div className="foot">
      <Footer />
    </div>
    
    </>
  );
}

export default App;
