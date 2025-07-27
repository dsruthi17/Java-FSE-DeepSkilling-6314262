import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        Name="John Doe" 
        School="ABC High School" 
        total={85} 
        goal={100} 
      />
    </div>
  );
}

export default App;
