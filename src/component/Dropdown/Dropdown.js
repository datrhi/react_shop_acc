import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './Dropdown.css'
export default function Dropdown({DropdownItems}) {
  const { logoutUser } = useContext(AuthContext)

  const [Click, setClick] = useState(false);
  const handleClick = () => setClick(!Click);
  return (
    <div className='dropdown-container'>
      <ul
        onClick={handleClick}
        className={Click ? "dropdown-menu active" : "dropdown-menu"}
      >
        {DropdownItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className='dropdown-link'
              onClick={() => {
                if(item.title === 'Đăng xuất') {
                  logoutUser()
                }
                setClick(false);
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
