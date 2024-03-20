import React from 'react'
import { PiTreePalmDuotone } from "react-icons/pi";
import { PiWineFill } from "react-icons/pi";
import { PiAirplaneTilt } from "react-icons/pi";
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export const Home = () => {

  
const [departureCity, setDepartureCity] = React.useState('NY');
const [destination, setDestination] = React.useState('NY');
const [travelDate, setTravelDate] = React.useState(new Date(2023, 0, 1)); // Use null or an initial date

const handleDepartureCityChange = (event) => {
  setDepartureCity(event.target.value);
};

const handleDestinationChange = (event) => {
  setDestination(event.target.value);
};

const handleTravelDateChange = (date) => {
  setTravelDate(date);
};

const handleSearchClick = () => {
  // Here, you can access the captured flight details:
  const flightDetails = {
    departureCity,
    destination,
    travelDate
  };

  // Save the flight details to local storage
  localStorage.setItem('flightDetails', JSON.stringify(flightDetails));

  // Print the stored flight details
  const storedFlightDetails = JSON.parse(localStorage.getItem('flightDetails'));
  console.log(storedFlightDetails);
};
    
  return (
    <div className='Home'>
      <div className='homeicons'>
        <div className="cihome"><PiTreePalmDuotone />
        <PiWineFill />
        <PiAirplaneTilt /><br></br></div>
        RELAX<br></br>
        EXPLORE<br></br>
        ENJOY!<br></br>
      </div>

      <div className='tickets'>
        <div className='from'>From<br></br>
        <select value={departureCity}onChange={handleDepartureCityChange} >
          <option value={1}>New York</option>
          <option value={2}>Los Angeles</option>
          <option value={3}>Chicago</option>
          
          </select>
        OR <label htmlfor='op'/>
        <input type='text'></input>
       
        </div>
        <div className='to'>To<br></br>
        <select value={destination} onChange={handleDestinationChange}>
          <option value={1}>New York</option>
          <option value={2}>Los Angeles</option>
          <option value={3}>Chicago</option>
          
          </select>
          OR <label htmlfor='op'/>
        <input type='text'></input></div>

        <div className='date'><LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker label="Travel Date" onChange={handleTravelDateChange} />
        
      </DemoContainer>
    </LocalizationProvider></div>
       <br></br>
        <Button variant="contained" onClick={handleSearchClick}>
 SEARCH
</Button>

      </div>
      

      
    </div>
  )
}

export default Home