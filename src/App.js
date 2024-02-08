import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/Landing_Page';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          
              <Routes>
              <Route path='/' element={<LandingPage/>} />
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;