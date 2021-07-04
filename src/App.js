import React,{ Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./app/pages/login/LoginPage.js";
import Home from "./app/pages/home/Home.js";
import Landing from "./app/pages/landing/LandingPage.js";
import SignUp from "./app/pages/signUp/SignUp.js";
import "./App.css";
export default function App() {
  
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/signin" component={LoginPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Landing} />
        </Switch>  
      </div>
      </Router>
    );

  
}

