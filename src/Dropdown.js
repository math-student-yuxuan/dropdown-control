import {
    ArrowDropDown,
  ArrowDropUp,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./dropdown.css";

function Dropdown({ options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  function handleToggle() {
    setOpen(!open);
  }

  function handleSelect(e) {
    const option = e.target.getAttribute("option");
    console.log(selected.indexOf(option));
    if (selected.indexOf(option) >= 0) {
      const ind = selected.indexOf(option);
      setSelected(selected.filter((val, i) => i !== ind))
    } else {
      setSelected([...selected, option]);
      console.log(2);
    }
    console.log(selected);
  }
  return (
    <div className="dropdown">
      <button className="dropdown__btn" onClick={handleToggle}>
        <p className="dropdown__text">{selected.join(",")}</p>
        {!open ? 
        <ArrowDropDown className="dropdown__arrow"/> :
        <ArrowDropUp className="dropdown__arrow"/>}
      </button>
      {open && (
        <div className="dropdown__content">
          {options.map((option) => {
            return (
              <div className="dropdown__option" option={option} onClick={handleSelect} key={option}>
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
