import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Account.css";
import { useState } from "react";
const Account = ({ userInfo }) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    window.innerWidth > 992 ? setDropdown(true) : setDropdown(false);
  };
  const onMouseLeave = () => setDropdown(false);
  return (
    <div
      className="account-container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className="account-link">
        {userInfo.username} <i className="fas fa-caret-down"></i>
      </p>
      {dropdown && (
        <Dropdown
          DropdownItems={[
            { title: "Số dư: " + 0, path: "/" },
            { title: "Đăng xuất", path: "/sign-in" },
          ]}
        />
      )}
    </div>
  );
};

export default Account;
