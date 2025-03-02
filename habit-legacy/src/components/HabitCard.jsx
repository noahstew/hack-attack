import React, { useState } from 'react';
import ProgressBar from './ProgressBar'
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
    <div className="game-card flex flex-between" style={{ position: 'relative' }}>
      {!isEditing && (
        <button 
          className="button" 
          onClick={handleEdit}
          style={{ 
            position: 'absolute',
            top: '12px',
            right: '12px',
            padding: '0.3rem 0.7rem', 
            fontSize: '0.7rem', 
            lineHeight: '1',
            zIndex: 5
          }}
        >
          Edit
        </button>
      )}
      
      <div className="habit-content flex-1">
        <div className="flex items-center">
          <div style={{ 
              width: '120px',  // Fixed width for consistent alignment
              marginRight: '1.5rem', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,  // Prevents shrinking
              alignSelf: 'center' // Ensures vertical centering
          }}>
            <div className="badge animate-pulse flex-center">
              <span role="img" aria-label="fire">🔥</span>
              <span>{streak}</span>
            </div>
            
            {streakMultiplier > 1 && (
              <div 
                className="streak-multiplier text-center mt-3" 
                style={{
                  color: '#ffb86c',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  textShadow: '0 0 5px rgba(255, 184, 108, 0.5)',
                  padding: '0.2rem 0',
                  borderRadius: '4px',
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                x{streakMultiplier} multiplier
              </div>
            )}
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
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
                <div className="w-[48rem]">
                <ProgressBar current={6} max={8} />
                </div>
                <div className="mt-4">
                  <span className="text-accent">Reward: {reward}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
