import './App.css';
import './global.css';
import { Layout } from './components';
import HabitCard from './components/HabitCard';
import NavBar from './components/NavBar';
import Leaderboard from './components/Leaderboard';
function App() {
  return (
    <Layout
      navbar={<div><NavBar/></div>}
      sidebar={
        <div>
        <Leaderboard/>
        </div>
      }
      main={
        <div>
          <HabitCard 
          title="Daily Task: Get Hydrated"
          description="Drink at least 8 glasses of water each day for optimal health."
          reward="50xp"
          streak={7}
        />
        </div>
      }
    />
  );
}

export default App;
