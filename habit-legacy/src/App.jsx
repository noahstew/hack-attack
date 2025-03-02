import './App.css';
import './global.css';
import { Layout, Leaderboard } from './components';
import HabitCard from './components/HabitCard';
import NavBar from './components/NavBar';
import { initialUsers } from './data/systemData';
import Player from './components/character/player';
import { UserProvider } from './context/UserContext';
import AddHabit from './components/addButton/addHabit';
import { useState } from 'react';

function App() {
  // State to manage habits
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: 'Daily Task: Get Hydrated',
      description:
        'Drink at least 8 glasses of water each day for optimal health.',
      reward: '50xp',
      xpAmount: 50,
      streak: 7,
    },
    {
      id: 2,
      title: 'Daily Task: BookWorm',
      description: 'Read at least 10 pages of a book',
      reward: '50xp',
      xpAmount: 50,
      streak: 3,
    },
    {
      id: 3,
      title: 'Weekly Task: Clean House',
      description: 'Clean: Room, Bathroom, Laundry, Kitchen, Floor, etc.',
      reward: '150xp',
      xpAmount: 150,
      streak: 12,
    },
  ]);

  // Handle adding a new habit
  const handleAddHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  // Handle updating a habit
  const handleUpdateHabit = (habitId, updatedData) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === habitId ? { ...habit, ...updatedData } : habit
      )
    );
  };

  // Handle streak increment
  const handleStreakIncrement = (habitId, newStreak) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === habitId ? { ...habit, streak: newStreak } : habit
      )
    );
  };

  return (
    <UserProvider>
      <Layout
        navbar={<NavBar />}
        sidebar={<Leaderboard users={initialUsers} />}
        main={
          <div>
            {habits.map((habit) => (
              <HabitCard
                key={habit.id}
                title={habit.title}
                description={habit.description}
                reward={habit.reward}
                xpAmount={habit.xpAmount}
                streak={habit.streak}
                onStreakIncrement={(newStreak) =>
                  handleStreakIncrement(habit.id, newStreak)
                }
                onSave={(updatedData) =>
                  handleUpdateHabit(habit.id, updatedData)
                }
              />
            ))}
            <Player />
            <AddHabit onAddHabit={handleAddHabit} />
          </div>
        }
      />
    </UserProvider>
  );
}

export default App;
