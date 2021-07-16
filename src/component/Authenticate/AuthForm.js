import React from "react";
import "./AuthForm.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import '../../App.css'
export default function AuthForm({ authRoute }) {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading) body = <div className='auth-loading'>Loading...</div>;
  else if (isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    body = (
      <div
        className={
          authRoute === "sign-in"
            ? "auth-login-container"
            : "auth-register-container"
        }
      >
        {authRoute === "sign-in" && <SignInForm />}
        {authRoute === "sign-up" && <SignUpForm />}
      </div>
    );
  }

  return <div className="page-container">{body}</div>;
}
