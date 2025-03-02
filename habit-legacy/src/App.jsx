import './App.css';
import './global.css';
import { Layout } from './components';
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
          <h3>Main Content (3/4 width)</h3>
          <p>This area takes up 3/4 of the screen width</p>
        </div>
      }
    />
  );
}

export default App;
