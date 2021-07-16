import React from "react";
import "./AuthForm.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Alert from "../Alert/Alert";
const SignUpForm = () => {
  //state Alert
  const [alert, setAlert] = useState(null);
  //Context
  const { registerUser } = useContext(AuthContext);

  const [signUpForm, setSignUpForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { username, password, confirmPassword } = signUpForm;
  const onChangeSignUpForm = (event) =>
    setSignUpForm({ ...signUpForm, [event.target.name]: event.target.value });
  const register = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Password is not match!" });
      setTimeout(() => setAlert(null), 5000);
      return;
    }

    try {
      const registerData = await registerUser(signUpForm);
      if (!registerData.success) {
        setAlert({ type: "danger", message: registerData.message });
        setTimeout(() => setAlert(null), 5000);
      }
      else {
        setAlert({type: 'success', message: registerData.message});
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register-container" onSubmit={register}>
      <form action="/sign-up" method="post" className="register-form">
        <h4 className="auth-title">ĐĂNG KÝ TÀI KHOẢN</h4>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Tên đăng nhập"
          className="register-input"
          value={username}
          onChange={onChangeSignUpForm}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mật khẩu"
          className="register-input"
          value={password}
          onChange={onChangeSignUpForm}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          id="password"
          placeholder="Nhập lại mật khẩu"
          className="register-input"
          value={confirmPassword}
          onChange={onChangeSignUpForm}
          required
        />
        <button type="submit" className="auth-button">
          Đăng ký
        </button>
      </form>
      <Alert info={alert} />
      <div className="reg-link-container">
        <p className="auth-helper">Bạn đã có tài khoản ?</p>
        <Link to="/sign-in" className="reg-link">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
