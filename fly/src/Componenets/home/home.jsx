import React from 'react';
import { PiTreePalmDuotone, PiWineFill, PiAirplaneTilt } from 'react-icons/pi';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchButtonDisabled, setSearchButtonDisabled] = React.useState(true);

const [departureCity, setDepartureCity] = React.useState('1');
const [destination, setDestination] = React.useState('1');
const [travelDate, setTravelDate] = React.useState(null);
const handleDepartureCityChange = (event) => {
  setDepartureCity(event.target.value);
  setSearchButtonDisabled(departureCity === destination);
};

const handleDestinationChange = (event) => {
  setDestination(event.target.value);
  setSearchButtonDisabled(departureCity === event.target.value);
};

const handleTravelDateChange = (date) => {
  setTravelDate(date);
  setSearchButtonDisabled(departureCity === destination);
};
const handleSearchClick = () => {
  if (departureCity === destination) {
    alert('Error: Departure and Destination cannot be the same.');
    return;
  }

  if (!searchButtonDisabled) {
    const flightDetails = {
      departureCity,
      destination,
      travelDate,
    };

    localStorage.setItem('flightDetails', JSON.stringify(flightDetails));

    // Redirect the person to the next page
    // ...
  }
};

  

  return (
    <div className='Home'>
      <div className='homeicons'>
        <div className='cihome'>
          <PiTreePalmDuotone />
          <PiWineFill />
          <PiAirplaneTilt />
          <br />
        </div>
        RELAX
        <br />
        EXPLORE
        <br />
        ENJOY!
        <br />
      </div>

      <div className='tickets'>
        <div className='from'>
          From
          <br/>
          <select value={departureCity} onChange={handleDepartureCityChange}>
            <option value="1">Italy</option>
            <option value="2">Portugal</option>
            <option value="3">Usa</option>
            <option value="4">Brazil</option>
            <option value="5">Australia</option>
            <option value="6">India</option>
            <option value="7">Mexico</option>
            <option value="8">Chile</option>
            <option value="9">Spain</option>
            <option value="10">England</option>
          </select>
          
        </div>
        <div className='to'>
          To
          <br />
          <select value={destination} onChange={handleDestinationChange}>
          <option value="1">Italy</option>
            <option value="2">Portugal</option>
            <option value="3">Usa</option>
            <option value="4">Brazil</option>
            <option value="5">Australia</option>
            <option value="6">India</option>
            <option value="7">Mexico</option>
            <option value="8">Chile</option>
            <option value="9">Spain</option>
            <option value="10">England</option>
          </select>
          
        </div>

        <div className='date'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
              <DatePicker label='Travel Date' value={travelDate} onChange={handleTravelDateChange} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <br />
        <Link to="/submit" style={{ textDecoration: 'none' }}>
          <Button variant='contained' disabled={searchButtonDisabled} onClick={handleSearchClick}>
            SEARCH
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
