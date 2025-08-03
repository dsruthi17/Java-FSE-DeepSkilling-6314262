import React from "react";
import "./App.css";

function App() {
  const heading = <h1>🏢 Office Space Rental App</h1>;

  const office = {
    name: "Space Hub",
    rent: 45000,
    address: "123 Main Street, Hyderabad",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
  };

  const officeList = [
    {
      name: "WorkNest",
      rent: 55000,
      address: "45, Sector 2, Bengaluru",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "InnovateHub",
      rent: 65000,
      address: "88, Connaught Place, Delhi",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "CollabCorner",
      rent: 40000,
      address: "56, MG Road, Pune",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="App">
      {heading}

      <h2>Featured Office</h2>
      <img src={office.image} alt={office.name} width="400" />
      <p>
        <strong>Name:</strong> {office.name}
      </p>
      <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
        <strong>Rent:</strong> ₹{office.rent}
      </p>
      <p>
        <strong>Address:</strong> {office.address}
      </p>

      <h2>Other Available Offices</h2>
      {officeList.map((item, index) => (
        <div
          key={index}
          style={{ marginBottom: "30px", borderBottom: "1px solid #ccc" }}
        >
          <img src={item.image} alt={item.name} width="400" />
          <p>
            <strong>Name:</strong> {item.name}
          </p>
          <p style={{ color: item.rent < 60000 ? "red" : "green" }}>
            <strong>Rent:</strong> ₹{item.rent}
          </p>
          <p>
            <strong>Address:</strong> {item.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
