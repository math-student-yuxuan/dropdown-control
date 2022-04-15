import {
    ArrowDropDown,
  ArrowDropUp,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./dropdown.css";

const colors = ['white', '#CECECE']

function Dropdown({ options, open, setOpen, handleToggle }) {
//   use a number to keep track of selected items, e.g. 1101 means the first, third and fourth
// items are selected
  const [currSelection, setCurrSelection]  = useState(0);
  const [selected, setSelected] = useState([]); /* list of selected options*/


// compute color of an item: colors[1] for selected, colors[0] for unselected
  function computeColor(index){
      if ((currSelection & (1 << index)) > 0){
          return colors[1];
      } else{
          return colors[0];
      }
  }
//   toggle color of selected/unselected item
  function toggleSelection(index){
      setCurrSelection(currSelection ^ (1 << index))
  }
  
  function handleSelect(e) {
    // fill the displayed list of selected items
    const option = e.target.getAttribute("option");
    if (selected.indexOf(option) >= 0) {
      const ind = selected.indexOf(option);
      setSelected(selected.filter((val, i) => i !== ind))
    } else {
      setSelected([...selected, option]);
    }

    // toggle color of selected/unselected item
    const index = e.target.getAttribute("ind");
    toggleSelection(index);

  }

  function handleSelectAll(){
    setSelected([...options]);
    setCurrSelection((1 << options.length) - 1);
  }
  function handleSelectNone(){
    setSelected([]);
    setCurrSelection(0);
  }
  return (
    <div className="dropdown">
      <div className="dropdown__all-none">
      <p className="dropdown__all" onClick={handleSelectAll} option="all">all</p>
      <p>|</p>
      <p className="dropdown__none" onClick={handleSelectNone} option="all">none</p>
      </div>
      <button className="dropdown__btn" onClick={handleToggle}>
        <p className="dropdown__text">{selected.join(", ")}</p>
        {!open ? 
        <ArrowDropDown className="dropdown__arrow"/> :
        <ArrowDropUp className="dropdown__arrow"/>}
      </button>
      {open && (
        <div className="dropdown__content">
          {options.map((option, i) => {
            return (
              <div className="dropdown__option" style={{backgroundColor: computeColor(i)}} option={option} ind={i} onClick={handleSelect} key={option}>
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
