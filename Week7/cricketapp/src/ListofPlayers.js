import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Rahul", score: 67 },
    { name: "Pant", score: 45 },
    { name: "Jadeja", score: 78 },
    { name: "Bumrah", score: 66 },
    { name: "Shami", score: 84 },
    { name: "Gill", score: 92 },
    { name: "Surya", score: 58 },
    { name: "Iyer", score: 72 },
    { name: "Ashwin", score: 60 },
  ];

  // Filter players with score < 70
  const filteredPlayers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with Score below 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
