import './App.css';
import './global.css';
import { Layout } from './components';
import HabitCard from './components/HabitCard';
import NavBar from './components/NavBar';
function App() {
  return (
    <Layout
      navbar={<div><NavBar/></div>}
      sidebar={<div>
        yo
      </div>}
      main={
        <div>
          <HabitCard 
          title="Daily Task: Get Hydrated"
          description="Drink at least 8 glasses of water each day for optimal health."
          reward="50xp"
          streak={7}
        />
        # added two new tasks
          <HabitCard 
          title="Daily Task: BookWorm"
          description="Read at least 10 pages of a book"
          reward="50xp"
          streak={3}
        />
        <HabitCard
          title="Weekly Task: Clean House"
          description="Clean: Room, Bathroom, Laundry, Kitchen, Floor, etc."
          reward="150xp"
          streak={12} 
        />
        </div>
      }
    />
  );
}

export default App;
