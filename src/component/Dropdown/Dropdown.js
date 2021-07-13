import React, { useState } from "react";
import {DropdownItems} from "./DropdownItems";
import { Link } from "react-router-dom";
import './Dropdown.css'
export default function Dropdown() {
  const [Click, setClick] = useState(false);
  const handleClick = () => setClick(!Click);
  return (
    <div>
      <ul
        onClick={handleClick}
        className={Click ? "dropdown-menu active" : "dropdown-menu"}
      >
        {DropdownItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className='dropdown-link'
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
