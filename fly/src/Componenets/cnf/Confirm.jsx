import React, { useEffect, useState } from 'react';

const DisplayPage = () => {
  const [flightDetails, setFlightDetails] = useState(null);

  // Mapping for city values
  const cityMapping = {
    '1': 'Italy',
    '2': 'Portugal',
    '3': 'USA',
    '4': 'Brazil',
    '5': 'Australia',
    '6': 'India',
    '7': 'Mexico',
    '8': 'Chile',
    '9': 'Spain',
    '10': 'England',
  };

  useEffect(() => {
    // Retrieve flight details from local storage
    const storedFlightDetails = localStorage.getItem('flightDetails');
    if (storedFlightDetails) {
      setFlightDetails(JSON.parse(storedFlightDetails));
    }
  }, []);

  // If flightDetails is null, render a message
  if (!flightDetails) {
    return <div>No flight details found.</div>;
  }

  return (
    <div>
      <h1>Flight Details</h1>
      <p>Departure City: {cityMapping[flightDetails.departureCity]}</p>
      <p>Destination: {cityMapping[flightDetails.destination]}</p>
      <p>Travel Date: {flightDetails.travelDate}</p>
    </div>
  );
};

export default DisplayPage;
