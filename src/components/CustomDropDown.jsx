import React, { useEffect, useRef } from "react";
import "./cd.css";

const CustomDropDown = ({
  value,
  options,
  isOpen,
  toggleOpen,
  handleOptionClick,
  type,
  tabkey,
  closeDropdown,
}) => {
  const dropdownRef = useRef(null);

  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //         closeDropdown(type);
  //       }
  //     };

  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [closeDropdown, type]);

  return (
    <div className="time-custom-dropdown" ref={dropdownRef}>
      <div
        className="drop-input"
        onClick={(e) => {
          e.stopPropagation();
          toggleOpen(type);
        }}
      >
        {value ? value : "Select time"}
      </div>
      {isOpen && (
        <div className="dropdown-menu-time show">
          {options.map((option) => (
            <div
              key={option.id}
              className="dropdown-item"
              onClick={(e) => {
                e.stopPropagation();
                handleOptionClick(tabkey, type, option);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
