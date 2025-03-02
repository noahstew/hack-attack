import React from 'react';
import LeaderboardItem from './LeaderboardItem';
import './Leaderboard.css';

const Leaderboard = ({ users = [] }) => {
  // Convert users object to array if needed
  const userArray = Array.isArray(users) ? users : Object.values(users);
  
  // Sort users by level in descending order
  const sortedUsers = [...userArray].sort((a, b) => b.level - a.level);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <div className="leaderboard-list">
        {sortedUsers.map((user, index) => (
          <LeaderboardItem 
            key={user.name}
            user={user}
            rank={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
