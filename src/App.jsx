import React from "react";
import About from "./components/About Page/About.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard Page/Dashboard.jsx";
import Login from "./components/Login Page/login.jsx";
// import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};
export default App;
