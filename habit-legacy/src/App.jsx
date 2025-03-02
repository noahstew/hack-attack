import './App.css';
import './global.css';
import Grid from './components/layout/Grid';
// Either import NavBar or remove its usage
import NavBar from './components/NavBar'; // Add this line if NavBar exists
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <>
      <div>
        <ProgressBar current={2100} max={2160} />
      </div>
      <Grid columns="1fr 1fr" gap="1rem">
        <div
          style={{
            background: 'var(--color-secondary)',
            padding: '1rem',
            borderRadius: 'var(--border-radius)',
          }}
        >
          Grid Item 1
        </div>
        <div
          style={{
            background: 'var(--color-secondary)',
            padding: '1rem',
            borderRadius: 'var(--border-radius)',
          }}
        >
          Grid Item 2
        </div>
        <div
          style={{
            background: 'var(--color-secondary)',
            padding: '1rem',
            borderRadius: 'var(--border-radius)',
          }}
        >
          Grid Item 3
        </div>
      </Grid>
    </>
  );
}

export default App; // This line is crucial and was missing
