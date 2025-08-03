import React, { useState } from "react";

const UserPage = () => {
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

  const [selectedFlight, setSelectedFlight] = useState(null);
  const [tickets, setTickets] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBook = () => {
    if (selectedFlight) {
      setBookingSuccess(true);
      setTimeout(() => setBookingSuccess(false), 3000);
    }
  };

  return (
    <div>
      <h1>Welcome User</h1>

      <h2>Available Flights</h2>
      <table>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Price</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.airline}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
              <td>{flight.price}</td>
              <td>
                <input
                  type="radio"
                  name="flight"
                  onChange={() => setSelectedFlight(flight)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedFlight && (
        <div className="booking-form">
          <h3>Book Flight: {selectedFlight.airline}</h3>
          <label>
            Number of Tickets:
            <input
              type="number"
              min="1"
              value={tickets}
              onChange={(e) => setTickets(e.target.value)}
            />
          </label>
          <button onClick={handleBook}>Book Now</button>
          {bookingSuccess && (
            <div className="success-message">
              Booking successful for {tickets} ticket(s) on{" "}
              {selectedFlight.airline}!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserPage;
