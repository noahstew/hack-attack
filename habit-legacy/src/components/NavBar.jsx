import ProfilePhoto from "./ProfilePhoto";
import ProgressBar from "./ProgressBar";
function NavBar() {
  return <div><img src="photo.png" alt="logo"></img> <h1>Habit Legacy</h1><div>LVL: 40</div><div><ProgressBar current={1100} max={10000}/></div><div>200/290</div><div>Username <ProfilePhoto src="image.png" alt="profilepic"/> </div></div>;
}
export default NavBar;
