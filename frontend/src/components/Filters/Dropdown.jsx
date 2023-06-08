// import dropdown from './dropdown.module.sass'
import "./dropdown.css";

import { useState } from "react";
export const Dropdown = ({ children, lable }) => {
  const [isOpen, setOpen] = useState(false);
  // const [items, setItem] = useState(1);
  // const [selectedItem, setSelectedItem] = useState(null);

  // const toggleDropdown = () => setOpen(!isOpen);

  // const handleItemClick = (id) => {
  //   selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  // };
  const handleMouseOver = () => {
    setOpen(true);
  };

  const handleMouseOut = () => {
    setOpen(false);
  };

  return (
    <div className="dropdown"       onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}>
      <div className="dropdown-header" >
        {lable && lable}
        <i className={`iconDr ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>{children}</div>
    </div>
  );
};
