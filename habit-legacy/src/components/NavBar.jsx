import { useState } from 'react';
import ProfilePhoto from './ProfilePhoto';
import ProgressBar from './ProgressBar';
function NavBar() {
  const [userExp, setUserExp] = useState(0); // User's current experience
  const [userLvl, setUserLvl] = useState(1); // User's level
  const [userExpGoal, setUserExpGoal] = useState(200); // Exp goal for next level

  function increaseExp(exp) {
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
  }

  return (
    <div className="flex flex-row justify-between items-center p-4">
      <div className="flex flex-row items-center gap-2">
        <img src="logo/LogoIcon.png" alt="logo" width={30}></img>{' '}
        <h1 className="font-semibold">Habit Legacy</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center gap-2 font-bold text-lg">
          <p>LVL:</p> <p className="">{userLvl}</p>
        </div>
        <div className="w-[32rem]">
          <ProgressBar current={userExp} max={userExpGoal} />
        </div>
        <div className="text-gray-200 -mb-2 text-sm self-end">
          {userExp}/{userExpGoal}
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <ProfilePhoto imgSrc="icon/Behemoth.jpg" alt="profilepic" width={40} />{' '}
        <p>Ben Dover</p>
        <button
          onClick={() => {
            increaseExp(75);
          }}
        >
          click me
        </button>
      </div>
    </div>
  );
}
export default NavBar;
