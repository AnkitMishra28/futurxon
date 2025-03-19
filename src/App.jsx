import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Aboutus from './pages/Aboutus/aboutus';
// import Leadership from './pages/leadership';
import Customer from './pages/Aboutus/customer';
import Webdevpage from './pages/Service/webdev';
import MobileDev from './pages/Service/mobiledev';
import Devops from './pages/Service/devops';
import Cloud from './pages/Service/clouddev';
import UIUX from './pages/Service/UIUXdev';
import AIsolution from './pages/Service/AIsolution';
import Blockchain from './pages/Service/blockchain';
import Contact from './pages/contact/Contactus';
import CyberSctpage from './pages/Service/cybersecurity';


const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">  
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about-company' element={<Aboutus/>} />
          {/* <Route path='/leadership' element={<Leadership/>} /> */}
          <Route path='/customer-reviews' element={<Customer/>} /> 
          <Route path='/web-dev' element={<Webdevpage/>} />
<<<<<<< HEAD
          <Route path='/mobile-apps' element={<MobileDev/>} />    
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/cyber' element={<CyberSctpage/>} />       
=======
          <Route path='/mobile-apps' element={<MobileDev/>} /> 
          <Route path='/devops' element={<Devops/>} /> 
          <Route path='/cloud' element={<Cloud/>} />    
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/ui-ux' element={<UIUX/>}/>  
          <Route path='/ai' element={<AIsolution/>}/> 
          <Route path='/blockchain' element={<Blockchain/>}/>       
>>>>>>> ac0f3ec444cf492a2c778d9838666f923507e66c
          </Routes>
      </div>
  );
};

export default App;