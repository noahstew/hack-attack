import './App.css';
import './global.css';
import { Layout, Leaderboard } from './components';
import HabitCard from './components/HabitCard';
import NavBar from './components/NavBar';
import { initialUsers, UserDB } from './data/systemData';
import Player from './components/character/player';
import { UserProvider } from './context/UserContext';
import AddHabit from './components/addButton/addHabit';

function App() {
  return (
    <UserProvider>
      <Layout
        navbar={<NavBar />}
        sidebar={<Leaderboard users={initialUsers} />}
        main={
          <div>
            <HabitCard 
              title="Daily Task: Get Hydrated"
              description="Drink at least 8 glasses of water each day for optimal health."
              reward="50xp"
              xpAmount={50}
              streak={7}
            />
            <HabitCard 
              title="Daily Task: BookWorm"
              description="Read at least 10 pages of a book"
              reward="50xp"
              xpAmount={50}
              streak={3}
            />
            <HabitCard
              title="Weekly Task: Clean House"
              description="Clean: Room, Bathroom, Laundry, Kitchen, Floor, etc."
              reward="150xp"
              xpAmount={150}
              streak={12} 
            />
            <Player />
            <AddHabit/>
          </div>
        }
      />
    </UserProvider>
  );
}

export default App;
