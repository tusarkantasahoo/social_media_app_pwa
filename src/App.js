import React, { Component,useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./app/pages/login/LoginPage.js";
import Landing from "./app/pages/landing/LandingPage.js";
import SignUp from "./app/pages/signUp/SignUp.js";
import "./App.css";
import AppHeader from "./app/components/header/AppHeader.js";
import { authResponseStoredValue } from "./utils/Constant.js";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authResponseData:{}
    };

    this.updateAuthState= this.updateAuthState.bind(this);
  }

 updateAuthState(authData){
    this.setState({authResponseData:authData})
  }


  render(){
    var authResponse = JSON.parse(localStorage.getItem(authResponseStoredValue));
    return (
      <div>
        {authResponse === null || authResponse === undefined ? (
          <LoginPage updateAuthState={this.updateAuthState}/>
        ) : (
          <Router>
            <div className="App">
              <Switch>
                <Route path="/" component={Landing} />
              </Switch>
              </div>
          </Router>
        )}
  
        {/* <Route path="/signup" component={SignUp} /> */}
      </div>
    );
  }
  
}
