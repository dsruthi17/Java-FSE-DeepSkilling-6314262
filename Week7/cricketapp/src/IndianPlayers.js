import React from "react";

const IndianPlayers = () => {
  const team = ["Virat", "Rohit", "Gill", "Pant", "Surya", "Jadeja"];

  // Destructuring for odd and even players
  const oddPlayers = team.filter((_, index) => index % 2 !== 0);
  const evenPlayers = team.filter((_, index) => index % 2 === 0);

  // Merge feature of ES6 (spread operator)
  const T20players = ["Virat", "Surya", "Bumrah"];
  const RanjiTrophy = ["Pujara", "Rahane", "Saha"];
  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>All Players (Merged)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
