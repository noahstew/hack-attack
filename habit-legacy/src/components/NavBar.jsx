import ProfilePhoto from './ProfilePhoto';
import ProgressBar from './ProgressBar';
import { userExp,userLvl,userExpGoal, increaseExp } from '../data/userData';
function NavBar() {
  
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
        <button onClick={handleClick}>click me</button>
      </div>
    </div>
  );
}
function handleClick() {
  console.log('Button clicked');
  increaseExp(75);
}
export default NavBar;
