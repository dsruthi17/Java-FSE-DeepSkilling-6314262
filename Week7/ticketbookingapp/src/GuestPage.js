import React from "react";

const GuestPage = () => {
  // Sample flight data
  const flights = [
    {
      id: 1,
      airline: "Delta",
      departure: "10:00 AM",
      arrival: "12:30 PM",
      price: "$250",
    },
    {
      id: 2,
      airline: "United",
      departure: "02:15 PM",
      arrival: "04:45 PM",
      price: "$210",
    },
    {
      id: 3,
      airline: "American",
      departure: "06:30 PM",
      arrival: "09:00 PM",
      price: "$230",
    },
  ];

  return (
    <div>
      <h1>Welcome Guest</h1>
      <p>Please login to book tickets</p>

      <h2>Available Flights</h2>
      <table>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.airline}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
              <td>{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestPage;
