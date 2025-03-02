import ProfilePhoto from "./ProfilePhoto";
import ProgressBar from "./ProgressBar";
function NavBar() { let current = 1100; let max = 10000;
  return <div><img src="LogoIcon.png" alt="logo"></img> <h1>Habit Legacy</h1><div>LVL: 40</div><div><ProgressBar current={current} max={max}/></div><div>{current}/{max}</div><div>Username <ProfilePhoto src="image.png" alt="profilepic"/> </div></div>;
}
export default NavBar;
