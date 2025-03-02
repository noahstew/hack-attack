import './App.css';
import './global.css';
import { Layout } from './components';

function App() {
  return (
    <Layout 
      navbar={
        <div>Navigation Bar</div>
      }
      sidebar={
        <div>
          <h3>Sidebar (1/4 width)</h3>
          <p>This area takes up 1/4 of the screen width</p>
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