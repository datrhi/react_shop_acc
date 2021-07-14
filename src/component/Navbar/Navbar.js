import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";

export default function Navbar() {
  const [Click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleCLick = () => setClick(!Click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    window.innerWidth > 992 ? setDropdown(true) : setDropdown(false);
  };
  const onMouseLeave = () => setDropdown(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          VALORANT SHOP
          <i class="fas fa-store" />
        </Link>
        <div className="menu-icon" onClick={handleCLick}>
          <i className={Click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={Click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Trang chủ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className="nav-links" onClick={closeMobileMenu}>
              Giao dịch gần đây
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/purchase"
              className="nav-links-dropdown"
              onClick={closeMobileMenu}
            >
              Nạp tiền <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link
              to="/sign-in"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Đăng nhập
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}
