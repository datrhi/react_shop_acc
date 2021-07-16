import React from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Alert from "../Alert/Alert";
const SignInForm = () => {
  //state Alert
  const [alert, setAlert] = useState(null);
  //Context
  const { loginUser } = useContext(AuthContext);
  
  const [signInForm, setSignInForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInForm;
  const onChangeSignInForm = (event) =>
    setSignInForm({ ...signInForm, [event.target.name]: event.target.value });
  const login = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(signInForm);
      if (!loginData.success) {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={login}>
        <h4 className="auth-title">ĐĂNG NHẬP TÀI KHOẢN</h4>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Tên đăng nhập"
          className="login-input"
          value={username}
          onChange={onChangeSignInForm}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mật khẩu"
          className="login-input"
          value={password}
          onChange={onChangeSignInForm}
          required
        />
        <button type="submit" className="auth-button">
          Đăng nhập
        </button>
      </form>
      <Alert info={alert} />
      <div className="reg-link-container">
        <p className="auth-helper">Bạn chưa có tài khoản ?</p>
        <Link to="/sign-up" className="reg-link">
          Đăng ký
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
