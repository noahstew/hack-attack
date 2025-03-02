let userExp = 0; // The user's current experience
let userLvl = 1; // The user's current level    
let userExpGoal = 200; // The user's experience goal

const increaseExp = (exp) => {
    let newExp = userExp + exp; // Add the gained exp to the current exp
    let newLvl = userLvl;      // Start from the current level
    let newGoal = userExpGoal; // Start from the current goal
  
    // Level up as long as the experience exceeds the goal
    while (newExp >= newGoal) {
      newExp -= newGoal; // Subtract the goal from the experience
      newLvl++;          // Increase the level
      newGoal += 50;     // Increase the goal by 50
    }
  
    // Update state with the new values
    setUserExp(newExp);
    setUserLvl(newLvl);
    setUserExpGoal(newGoal);
  };
  export { userExp, userLvl, userExpGoal, increaseExp };