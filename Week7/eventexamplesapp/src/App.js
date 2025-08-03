import React, { useState } from "react";
import CurrencyConverter from "./CurrencyConvertor";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  const incrementValue = () => {
    setCounter((prev) => prev + 1);
  };

  const sayHello = () => {
    console.log("Hello! You clicked increment");
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const onPress = () => {
    alert("I was clicked!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1> Event Examples App</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleDecrement}>Decrement</button>
      <hr />
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
      <hr />
      <button onClick={onPress}>Say Hello</button>
      <hr />
      <CurrencyConverter />
    </div>
  );
}

export default App;
