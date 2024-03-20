import React from 'react';
import { PiTreePalmDuotone, PiWineFill, PiAirplaneTilt } from 'react-icons/pi';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';

const Home = () => {
  const [departureCity, setDepartureCity] = React.useState('1');
  const [destination, setDestination] = React.useState('1');
  const [travelDate, setTravelDate] = React.useState(null);

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
    const flightDetails = {
      departureCity,
      destination,
      travelDate,
    };

    localStorage.setItem('flightDetails', JSON.stringify(flightDetails));
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
          <br />
          <select value={departureCity} onChange={handleDepartureCityChange}>
            <option value="1">New York</option>
            <option value="2">Los Angeles</option>
            <option value="3">Chicago</option>
          </select>
          OR
          <label htmlFor='op' />
          <input type='text' />
        </div>
        <div className='to'>
          To
          <br />
          <select value={destination} onChange={handleDestinationChange}>
            <option value="1">New York</option>
            <option value="2">Los Angeles</option>
            <option value="3">Chicago</option>
          </select>
          OR
          <label htmlFor='op' />
          <input type='text' />
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
          <Button variant='contained' onClick={handleSearchClick}>
            SEARCH
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
