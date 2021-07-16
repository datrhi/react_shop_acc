import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import { AuthContext } from "../../context/AuthContext";
import Account from "../Account/Account";

export default function Navbar() {
  //Auth context
  const { logoutUser, authState } = useContext(AuthContext);
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
            {window.innerWidth <= 992 ? (
              <Link
                to="/purchase"
                className="nav-links-dropdown"
                onClick={closeMobileMenu}
              >
                Nạp tiền <i className="fas fa-caret-down" />
              </Link>
            ) : (
              <div
                className="nav-links-dropdown"
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                Nạp tiền <i className="fas fa-caret-down"></i>{" "}
              </div>
            )}
            {dropdown && (
              <Dropdown
                DropdownItems={[
                  {
                    title: "Nạp thẻ",
                    path: "/card-purchasing",
                  },
                  {
                    title: "Chuyển khoản",
                    path: "/banking",
                  },
                ]}
              />
            )}
          </li>
          {authState.isAuthenticated === false ? (
            <li>
              <Link
                to="/sign-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Đăng nhập
              </Link>
            </li>
          ) : (
            <div>
              <li>
                <div className="username-container">
                  User: {authState.user.username}
                </div>
              </li>
              <li>
                <Link
                  to="/purchase"
                  className="nav-links-mobile"
                  onClick={() => {
                    closeMobileMenu();
                  }}
                >
                  Số dư: 0
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-in"
                  className="nav-links-mobile"
                  onClick={() => {
                    logoutUser();
                    closeMobileMenu();
                  }}
                >
                  Đăng xuất
                </Link>
              </li>
            </div>
          )}
        </ul>
        {authState.isAuthenticated === false ? (
          <Button />
        ) : (
          <Account userInfo={authState.user} />
        )}
      </nav>
    </>
  );
}
