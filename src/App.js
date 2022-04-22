import icon from './Images/Transparent-Icon.png';
import logo from './Images/Transparent-Logo.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
      
      <div> <img src={icon} className="App-icon" alt="logo" />
        <p>
          Website coming soon!
        </p></div>
      </header>
    </div>
  );
}

export default App;
