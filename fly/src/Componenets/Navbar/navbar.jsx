import React from 'react'
import { PiAirplaneTiltBold } from "react-icons/pi";
const navbar = () => {
  return (
    <div className='navbar'>
    <div className="icon">
    <PiAirplaneTiltBold />
    </div>
    
    
    <div>
      <ul>
        <li className='flex'><a href='#Eat'>Eat</a></li>
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