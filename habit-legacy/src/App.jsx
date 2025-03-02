import './App.css';
import './global.css';
import React, { useState, useEffect } from 'react';
import { Layout, Leaderboard } from './components';
import HabitCard from './components/HabitCard';
import NavBar from './components/NavBar';
import { UserDB } from './data/systemData';
import Player from './components/character/player';

function App() {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  
  // Add state to manage habits
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: "Daily Task: Get Hydrated",
      description: "Drink at least 8 glasses of water each day for optimal health.",
      reward: "50xp",
      streak: 7
    },
    {
      id: 2,
      title: "Daily Task: BookWorm",
      description: "Read at least 10 pages of a book",
      reward: "50xp",
      streak: 3
    },
    {
      id: 3,
      title: "Weekly Task: Clean House",
      description: "Clean: Room, Bathroom, Laundry, Kitchen, Floor, etc.",
      reward: "150xp",
      streak: 12
    }
  ]);

  useEffect(() => {
    // Fetch users when component mounts
    UserDB.getAll()
      .then(usersData => {
        setUsers(usersData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  const handleStreakIncrement = (habitId, newStreak) => {
    setHabits(prevHabits => 
      prevHabits.map(habit => 
        habit.id === habitId ? { ...habit, streak: newStreak } : habit
      )
    );
  };

  const handleHabitUpdate = (habitId, updatedData) => {
    setHabits(prevHabits => 
      prevHabits.map(habit => 
        habit.id === habitId ? { ...habit, ...updatedData } : habit
      )
    );
  };

  return (
    <Layout
      navbar={<div><NavBar/></div>}
      sidebar={
        <div>
          {loading ? <p>Loading users...</p> : <Leaderboard users={users} />}
        </div>
      }
      main={
        <div>
          {habits.map(habit => (
            <HabitCard 
              key={habit.id}
              title={habit.title}
              description={habit.description}
              reward={habit.reward}
              streak={habit.streak}
              onStreakIncrement={(newStreak) => handleStreakIncrement(habit.id, newStreak)}
              onSave={(updatedData) => handleHabitUpdate(habit.id, updatedData)}
            />
          ))}
          <Player/>
        </div>
      }
      
    />
  );
}

export default App;
