import './App.css';
<<<<<<< Updated upstream
import NavBar from './components/NavBar';
import Leaderboard from './components/Leaderboard';
import HabitList from './components/HabitList';
=======
import './global.css';
import Grid from './components/layout/Grid';
import NavBar from './NavBar';
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <NavBar />
<<<<<<< Updated upstream
      <Leaderboard />
      <HabitList />
=======
      <h3>Grid Component</h3>
      <Grid columns="1fr 1fr 1fr" gap="1rem">
        <div style={{ background: 'var(--color-secondary)', padding: '1rem', borderRadius: 'var(--border-radius)' }}>Grid Item 1</div>
        <div style={{ background: 'var(--color-secondary)', padding: '1rem', borderRadius: 'var(--border-radius)' }}>Grid Item 2</div>
        <div style={{ background: 'var(--color-secondary)', padding: '1rem', borderRadius: 'var(--border-radius)' }}>Grid Item 3</div>
      </Grid>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
