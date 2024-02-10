import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import AppointmentForm from './Components/AppointmentForm/AppointmentForm';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewFrom from './Components/ReviewForm/ReviewForm';
import ProfileCard from './Components/ProfileCard/ProfileCard';

import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>
              <Route path="/Sign_Up" element={<Sign_Up />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/instant-consultation" element={<InstantConsultation />} />
              <Route path='/finddoctor' element={<FindDoctorSearch />} />
              <Route path='/AppointmentForm' element={<AppointmentForm />} />
              <Route path='/search/doctors' element={<BookingConsultation />} />  
              <Route path='/Notification' element={<Notification />} />  
              <Route path='/reviews' element={<ReviewFrom />} />
              <Route path='/profile' element={<ProfileCard />} />
              <Route path='/reports' element={<ReportsLayout />} />  

              


              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;