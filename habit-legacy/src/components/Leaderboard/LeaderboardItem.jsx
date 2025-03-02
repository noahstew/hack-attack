import React from 'react';

const LeaderboardItem = ({ user, rank }) => {
  // Determine rank class for styling
  const getRankClass = () => {
    switch(rank) {
      case 1: return 'rank-first';
      case 2: return 'rank-second';
      case 3: return 'rank-third';
      default: return '';
    }
  };
  
  return (
    <div className={`leaderboard-item ${getRankClass()}`}>
      <div className="leaderboard-rank">{rank}</div>
      <div className="leaderboard-profile">
        <img 
          src={user.profilePic || '/public/photo.png'} 
          className="leaderboard-avatar"
        />
      </div>
      <div className="leaderboard-info">
        <h3 className="leaderboard-name">{user.name}</h3>
        <div className="leaderboard-level">
          <span className="level-indicator">{user.level}</span>
          <span className="text-muted">Level</span>
        </div>
      </div>
      <div className="leaderboard-score">
        {user.score || user.level * 100} pts
      </div>
    </div>
  );
};

export default LeaderboardItem;
