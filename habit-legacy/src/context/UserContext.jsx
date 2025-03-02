import React, { createContext, useState, useContext } from 'react';

// Create context
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
  const [userExp, setUserExp] = useState(0);
  const [userLvl, setUserLvl] = useState(1);
  const [userExpGoal, setUserExpGoal] = useState(200);

  // Function to increase experience
  const increaseExp = (exp) => {
    let newExp = userExp + exp; // Add experience
    let newLvl = userLvl; // Start from current level
    let newGoal = userExpGoal; // Start from current goal

    // Level up if experience exceeds the goal
    while (newExp >= newGoal) {
      newExp -= newGoal; // Subtract the goal from the experience
      newLvl++; // Increase the level
      newGoal += 50; // Increase the goal by 50
    }

    // Update state
    setUserExp(newExp);
    setUserLvl(newLvl);
    setUserExpGoal(newGoal);
    
    return newLvl > userLvl; // Return true if leveled up
  };

  const value = {
    userExp,
    userLvl,
    userExpGoal,
    increaseExp
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
