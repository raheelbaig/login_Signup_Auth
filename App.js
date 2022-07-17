import './App.css';
import {useState} from 'react';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';


function App() {
  
  const [screen, setScreen] = useState('register')
  
  function changeScreen(currentScreen) {
    setScreen(currentScreen)
  }

  return (
    <div className="App">
      {screen === 'register' && <Register changeScreen={changeScreen}/>}
      {screen === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;
