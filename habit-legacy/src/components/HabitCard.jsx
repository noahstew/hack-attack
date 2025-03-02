import React, { useState, useEffect } from 'react';
import Confetti from './Confetti';
import { useUser } from '../context/UserContext';
import getGeminiSuggestion from '../services/geminiService';

const HabitCard = ({ 
  title, 
  description, 
  reward, 
  xpAmount = 0,  // Add xpAmount prop
  streak = 0,
  onSave = () => {},
  onStreakIncrement = () => {},
  onSuggestionReceived = () => {} // New prop for handling suggestions
}) => {
  const { increaseExp } = useUser();  // Get increaseExp from context
  const [isEditing, setIsEditing] = useState(false);
  const [isFireAnimating, setIsFireAnimating] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(streak);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // State for displaying content
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentDescription, setCurrentDescription] = useState(description);
  
  // State for editing
  const [editData, setEditData] = useState({
    title,
    description
  });
  
  // Update local state when props change
  useEffect(() => {
    setCurrentTitle(title);
    setCurrentDescription(description);
    setEditData({ title, description });
  }, [title, description]);

  const streakMultiplier = Math.floor(currentStreak / 5) + 1;

  const handleEdit = () => {
    setIsEditing(true);
    // Reset edit data to current values
    setEditData({
      title: currentTitle,
      description: currentDescription
    });
  };

  const handleSave = async () => {
    // Update the displayed content
    setCurrentTitle(editData.title);
    setCurrentDescription(editData.description);
    
    // Notify parent component about the change
    onSave({
      title: editData.title,
      description: editData.description,
      reward // keep the reward unchanged
    });
    
    setIsEditing(false);
    
    // Get suggestion from Gemini API
    try {
      const suggestion = await getGeminiSuggestion(editData.title, editData.description);
      onSuggestionReceived(suggestion);
    } catch (error) {
      console.error('Error getting suggestion:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  const handleFireClick = () => {
    // Animate the fire
    setIsFireAnimating(true);
    
    // Increment streak
    const newStreak = currentStreak + 1;
    setCurrentStreak(newStreak);
    
    // Calculate XP with streak multiplier
    const streakMultiplier = Math.floor(newStreak / 5) + 1;
    const totalXp = xpAmount * streakMultiplier;
    
    // Increase experience
    const didLevelUp = increaseExp(totalXp);
    
    // If user leveled up, maybe show a special effect or message
    if (didLevelUp) {
      console.log("Level up!");
      // Add level-up specific effects here
    }
    
    // Notify parent about streak increment
    onStreakIncrement(newStreak);
    
    // Show confetti
    setShowConfetti(true);
    
    // Reset animations after delay
    setTimeout(() => {
      setIsFireAnimating(false);
      setShowConfetti(false);
    }, 2000);
  };

  return (
    <div className="game-card flex flex-between" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Confetti component */}
      <Confetti active={showConfetti} duration={2000} />
      
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
            <div 
              className={`badge animate-pulse flex-center ${isFireAnimating ? 'animate-fire' : ''}`} 
              onClick={handleFireClick}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                transform: isFireAnimating ? 'scale(1.15)' : '',
                ':hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 0 15px rgba(255, 184, 108, 0.7)'
                }
              }}
            >
              <span 
                role="img" 
                aria-label="fire" 
                style={{
                  fontSize: isFireAnimating ? '1.8em' : '1.2em',
                  transition: 'font-size 0.2s ease'
                }}
              >
                🔥
              </span>
              <span>{currentStreak}</span>
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
                
                {/* Show reward as read-only text */}
                <div className="mb-2 text-accent">
                  <strong>Reward:</strong> {reward}
                </div>
                
                <button className="button button-success" onClick={handleSave}>
                  Save
                </button>
              </div>
            ) : (
              // Display Mode
              <>
                <h3>{currentTitle}</h3>
                <p className="text-muted">{currentDescription}</p>
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
