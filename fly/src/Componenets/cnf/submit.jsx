import { alignProperty } from '@mui/material/styles/cssUtils';
import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Submit = () => {
  const storedFlightDetails = JSON.parse(localStorage.getItem('flightDetails'));

  return (
    <div className='Submit'>
      <h1>Submitted Flight Details:</h1>
      <ul>
        <li>Departure City: {storedFlightDetails.departureCity}</li>
        <li>Destination: {storedFlightDetails.destination}</li>
        <li>Travel Date: {storedFlightDetails.travelDate}</li>
      </ul>
      <br></br><br></br>
      <div className='tickets' >
      <label htmlfor='name'>NAME:</label>
      <input className='form-control' type='text' id='name' name='name' placeholder="Your Name" required /><br/>

      <label htmlfor='dob'>DOB:</label>
      <input className='form-control' type='date' id='name' name='name' required /><br/>

      <label htmlfor='passengers'>NO.OF PASSENGERS</label>
      <input className='form-control' type='number' id='name' name='name' required  /><br/>

      <label htmlfor='gmail'>E-MAIL</label>
      <input className='form-control' type='email' id='name' name='name' required  /><br/>


      <Link to="/confirm" style={{ textDecoration: 'none' }}>
          <Button variant='contained' >
            SEARCH
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Submit;