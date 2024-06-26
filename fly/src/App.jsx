import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componenets/Navbar/navbar';
import Home from './Componenets/home/home';
import Submit from './Componenets/cnf/submit'; 
import Image from './Componenets/home/imgslider';
import Footer from './Componenets/Footer/footer';
import Containerslider from './Componenets/home/containerslider';
import Confirm from'./Componenets/cnf/Confirm';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Image />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
        <br></br>
        <Containerslider />
      <Footer/>
      </div>
    </Router>
  );
};

export default App;
