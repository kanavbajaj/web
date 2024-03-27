import React from 'react'
import { Link } from 'react-router-dom';
import { PiAirplaneTiltBold } from "react-icons/pi";
const navbar = () => {
  return (
    <div className='navbar'>
    <div className="icon">
    <PiAirplaneTiltBold /><h2>FlySafe</h2>
    </div>
    
    
    
    <div>
      <ul>
      <li className='flex'><a href='file:///C:/Users/kanav/Documents/Desktop/22bce0915/Web Programming project/web/fly/src/Componenets/countries/arline_login.html'>Eat</a></li>

        <li className='flex'><a href='#Play'>Play</a></li>
        <li className='flex'><a href='#Relax'>Relax</a></li>
        <li className='flex'><a href='#Book'>Book</a></li>
        <li className='flex'><a href='#Log'>Log In</a></li>
      </ul>
      </div>
</div>
    
   
    
    
  )
}

export default navbar