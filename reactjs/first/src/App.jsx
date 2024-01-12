import logo from './logo.svg';
import './App.css';

// Component
function App() {
  return (
    // JSX -> JavaScript + XML
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WsCube Tech!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          wscubetech.com
        </a>
      </header>
    </div>
  );
}

export default App;
