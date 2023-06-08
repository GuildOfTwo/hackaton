// import dropdown from './dropdown.module.sass'
import "./dropdown.css";

import { useState } from "react";
export const Dropdown = ({ children, lable }) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {lable && lable}
        <i className={`icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>{children}</div>
    </div>
  );
};
