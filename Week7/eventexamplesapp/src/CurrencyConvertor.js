import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = () => {
    if (!rupees || isNaN(rupees)) {
      alert("Please enter a valid amount in Rupees:");
      return;
    }

    const euroRate = 0.011;
    const converted = (rupees * euroRate).toFixed(2);
    setEuros(converted);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <label>Enter amount in INR:</label>
      <br />
      <input
        type="text"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Amount in INR"
      />
      <br />
      <button onClick={handleSubmit}>Convert</button>
      <br />
      {euros && (
        <p>
          💱 {rupees} INR = <strong>{euros} EUR</strong>
        </p>
      )}
    </div>
  );
};

export default CurrencyConvertor;
