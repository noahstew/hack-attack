import ProfilePhoto from "./ProfilePhoto";
import ProgressBar from "./ProgressBar";
function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <img src="logo/LogoIcon.png" alt="logo" width={50}></img>{' '}
        <h1>Habit Legacy</h1>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-96">
          <ProgressBar current={1100} max={10000} />
        </div>
        <div>
          <div>LVL: 40</div>
          <div>200/290</div>
        </div>
      </div>

      <div className="flex flex-row items-center">
        <ProfilePhoto imgSrc="icon/eagle.jpeg" alt="profilepic" width={40} />{' '}
        <p>I have bad habits</p>
      </div>
    </div>
  );
}
export default NavBar;
