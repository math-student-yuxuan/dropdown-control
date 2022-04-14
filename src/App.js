import React from 'react'
import './App.css';
import Dropdown from './Dropdown';

function App() {
  const options = ['first', 'second', 'third', 'fourth', 1, 2, 3, 4, 5];
 
  return (
    <div className="app">
      <div className="app__outer">
      <Dropdown options={options}/>
      </div>
    </div>
  );
}

export default App;
