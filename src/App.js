import React, { useState } from 'react'
import './App.css';
import Dropdown from './Dropdown';

function App() {
  const [open, setOpen] = useState(false); /* dropdown open/closed */
  const options = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth', 'ten', 'eleventh', 'twelveth'];

  function handleToggle(){
    setOpen(!open)
  }
  function handleClose(e){
    // if the form is open and the click is not on the dropdown list, close the dropdown
    if (open && (e.target.getAttribute("option") === null)) {setOpen(false)};
  }
  return (
    <div className="app" onClick={handleClose}>
      <div className="app__outer">
      <Dropdown options={options} open={open} setOpen={setOpen} handleToggle={handleToggle}/>
      </div>
    </div>
  );
}

export default App;
