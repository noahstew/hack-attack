import './App.css';
import './global.css';
import { Layout, Leaderboard } from './components';
import HabitCard from './components/HabitCard';
import NavBar from './components/NavBar';
import { initialUsers, habits } from './data/systemData';
import Player from './components/character/player';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Layout
        navbar={<NavBar />}
        sidebar={<Leaderboard users={initialUsers} />}
        main={
          <div>
            {habits.map((habit) => (
              <HabitCard
                title={habit.title}
                description={habit.description}
                reward={habit.reward}
                xpAmount={habit.xpAmount}
                streak={habit.streak}
              />
            ))}
            <Player />
          </div>
        }
      />
    </UserProvider>
  );
}

export default App;
