import React from 'react';

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
    </div>
  );
};

export default Submit;