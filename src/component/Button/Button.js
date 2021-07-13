import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button() {
  return (
    <Link to="sign-in">
      <button className="btn">Đăng nhập</button>
    </Link>
  );
}
