import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Import components
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';

function App(props) {
  // State
  const [textState, setTextState] = useState({
    text: 'This is initial state text',
  });
  const textChangedHandler = (event) => {
    setTextState({
      text: event.target.value,
    });
  };

  // Render main component
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <UserOutput text={textState.text} />
        <UserInput text={textState.text} changed={textChangedHandler} />
      </header>
    </div>
  );
}

export default App;
