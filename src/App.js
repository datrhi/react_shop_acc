import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
import History from "./pages/History";
import Purchase from "./pages/Purchase";
import CardPurchasing from "./pages/CardPurchasing";
import Banking from "./pages/Banking";
import AuthForm from "./component/Authenticate/AuthForm";
import AuthContextProvider from "./context/AuthContext";
import ProtectedRoute from "./component/routing/ProtectedRoute";
import NullHome from "./pages/NullHome";
function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  if (window.innerWidth > 992 && windowSize <= 992) {
    setWindowSize(window.innerWidth);
    console.log(windowSize);
  } else if (window.innerWidth <= 992 && windowSize > 992) {
    setWindowSize(window.innerWidth);
    console.log(windowSize);
  }

  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/history" component={History} />
          {window.innerWidth <= 992 && (
            <Route exact path="/purchase" component={Purchase} />
          )}
          <ProtectedRoute
            exact
            path="/card-purchasing"
            component={CardPurchasing}
          />
          <ProtectedRoute exact path="/banking" component={Banking} />
          <Route
            exact
            path="/sign-in"
            render={(props) => <AuthForm {...props} authRoute="sign-in" />}
          />
          <Route
            exact
            path="/sign-up"
            render={(props) => <AuthForm {...props} authRoute="sign-up" />}
          />
          <Route path="/" component={NullHome} />
        </Switch>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
