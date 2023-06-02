import logo from './assets/weight-loss.gif';
import Progress from './progress';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <strong>Weight Loss Journey</strong>
          <p> Goal Weight: 80.7kg</p>
          <Progress />
      </header>
      
    </div>
    
  );
}

export default App;
