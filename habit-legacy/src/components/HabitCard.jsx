import React, { useState } from 'react';
// import { FaFire } from 'react-icons/fa';

const HabitCard = ({ 
  title, 
  description, 
  reward, 
  streak = 0,
  onSave = () => {} 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title,
    description,
    reward
  });

  const streakMultiplier = Math.floor(streak / 5) + 1; // Every 5 days increases multiplier

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(editData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  return (
    <div className="game-card flex flex-between">
      <div className="habit-content flex-1">
        {isEditing ? (
          // Edit Mode
          <div className="habit-edit-form">
            <input 
              type="text" 
              name="title"
              value={editData.title}
              onChange={handleChange}
              className="button w-full mb-2"
              placeholder="Habit Title"
            />
            <textarea
              name="description"
              value={editData.description}
              onChange={handleChange}
              className="button w-full mb-2"
              placeholder="Description"
            ></textarea>
            <input
              type="text"
              name="reward"
              value={editData.reward}
              onChange={handleChange}
              className="button w-full mb-2"
              placeholder="Reward (e.g. 50xp)"
            />
            <button className="button button-success" onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          // Display Mode
          <>
            <h3>{title}</h3>
            <p className="text-muted">{description}</p>
            <div className="mt-4">
              <span className="text-accent">Reward: {reward}</span>
            </div>
          </>
        )}
      </div>
      
      <div className="habit-streak flex flex-col items-center ml-4">
        <div className="badge animate-pulse flex-center mb-2">
          {/* Replace with your preferred fire icon */}
          <span role="img" aria-label="fire">🔥</span>
          <span>{streak}</span>
        </div>
        
        {streakMultiplier > 1 && (
          <div className="streak-multiplier text-accent">
            x{streakMultiplier} multiplier
          </div>
        )}
        
        {!isEditing && (
          <button 
            className="button mt-2" 
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default HabitCard;
