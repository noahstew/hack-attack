import ProfilePhoto from './ProfilePhoto';

function Leaderboard() {
  return (
    <div>
      <div>
        <h1>Progress Ladder</h1>
        <p>Your Journey is Unique~ Focus on your Path</p>
      </div>
      <div>
        <ProfilePhoto src="photo.png" alt="user1" />
        <p>username</p>
        <p>LVL:2</p>
      </div>
      <div>
        <ProfilePhoto src="photo.png" alt="user2" />
        <p>noh</p>
        <p>LVL:3</p>
      </div>
      <div>
        <ProfilePhoto src="photo.png" alt="user2" />
        <p>lam</p>
        <p>LVL:999</p>
      </div>
      <div>
        <ProfilePhoto src="photo.png" alt="user2" />
        <p>BEcko</p>
        <p>LVL:18</p>
      </div>
      <div>
        <ProfilePhoto src="photo.png" alt="user2" />
        <p>moin</p>
        <p>LVL:99</p>
      </div>
      <div>see more</div>
    </div>
  );
}

export default Leaderboard;
