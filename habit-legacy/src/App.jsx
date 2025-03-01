import './App.css';
import './global.css';
import Grid from './components/layout/Grid';
import NavBar from './NavBar';

function App() {
  return (
    <>
      hello
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