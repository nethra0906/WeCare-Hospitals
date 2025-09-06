import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

import HeaderHP from './components/Header HP'
import BodyHP from './components/Body HP'
import FooterHP from './components/Footer HP'

import HeaderLP from './components/Header LP'
import BodyLP from './components/Body LP'
import FooterLP from './components/Footer LP'

import HeaderRP from './components/Header RP'
import BodyRP from './components/Body RP'
import FooterRP from './components/Footer RP'

import AboutUs from './components/AboutUs';

import HContactUs from './components/HContactUs';
import ContactUs from './components/ContactUs';

import BAA from './components/BAA';

import PatientR from './components/PatientsR';

import HEmergency from './components/HEmergency';
import Emergency from './components/Emergency';

import Header_Main from './components/Header_Main';
import Main from './components/Main';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <HeaderHP/>
              <BodyHP/>
              <FooterHP/>
            </>
          } />

          <Route path="/login" element={
            <>
              <HeaderLP/>
              <BodyLP/>
              <FooterLP/>
            </>
          } />

          <Route path="/register" element={
            <>
              <HeaderRP/>
              <BodyRP/>
              <FooterRP/>
            </>
          } />

          <Route path="/AboutUs" element={
            <>
              <AboutUs/>
            </>
          } />

          <Route path="/ContactUs" element={
            <>
              <HContactUs/>
              <ContactUs/>
            </>
          } />

          <Route path="/BAA" element={
            <>
              <BAA/>
            </>
          } />

          <Route path="/PatientR" element={
            <>
              <PatientR/>
            
            </>
          } />

          <Route path="/Emergency" element={
            <>
              <HEmergency/>
              <Emergency/>
            
            </>
          } />  

          <Route path="/Main_Page" element={
            <>
               <Header_Main/>
               <Main/>

            </>
          } />  



        </Routes>
      </div>
    </Router>
  );
}

export default App;
