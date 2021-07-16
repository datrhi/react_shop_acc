import React from "react";
import { Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import '../../App.css'
import RedirectRoute from "./RedirectRoute";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  if (authLoading) {
    return <div className="auth-loading">Loading...</div>;
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Component {...props} {...rest} />
          </>
        ) : (
          <RedirectRoute/>
        )
      }
    />
  );
};

export default ProtectedRoute;
