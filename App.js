import React from 'react';
import './App.css';

//import ContactUs from './components/contactForm';
import AboutUs from './components/aboutUs';

function App() {
  return (
    <div className="App">
      {/* <div className="container">
        <ContactUs/> */}
        <div className="about">
          <AboutUs/>
        </div>
      </div>
    
  );
}

export default App;