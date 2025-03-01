import './App.css';
import './global.css';
import Grid from './components/layout/Grid';
// Either import NavBar or remove its usage
import NavBar from './components/NavBar'; // Add this line if NavBar exists

function App() {
  return (
    <>
      hello
      {/* If you don't have NavBar component yet, comment this line out */}
      <NavBar />
      <h3>Grid Component</h3>
      <Grid columns="1fr 1fr 1fr" gap="1rem">
        <div style={{ background: 'var(--color-secondary)', padding: '1rem', borderRadius: 'var(--border-radius)' }}>Grid Item 1</div>
        <div style={{ background: 'var(--color-secondary)', padding: '1rem', borderRadius: 'var(--border-radius)' }}>Grid Item 2</div>
        <div style={{ background: 'var(--color-secondary)', padding: '1rem', borderRadius: 'var(--border-radius)' }}>Grid Item 3</div>
      </Grid>
    </>
  );
}

export default App; // This line is crucial and was missing