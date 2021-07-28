import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./app/pages/login/LoginPage.js";
import Landing from "./app/pages/landing/LandingPage.js";
import SignUp from "./app/pages/signUp/SignUp.js";
import "./App.css";
import AppHeader from "./app/components/header/AppHeader.js";
import { authResponseStoredValue } from "./utils/Constant.js";
import { userReloginCheckToken } from "./auth/AuthApi.js";
import ForgotPassword from "./app/pages/forgotPassword/ForgotPassword.js";
import ResetPassword from "./app/pages/forgotPassword/ResetPassword.js";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authResponseData: null,
      routeToAuthPage: "login",
      routeToSocialPage: "landing",
    };

    this.updateAuthState = this.updateAuthState.bind(this);
    this.renderAuthPages = this.renderAuthPages.bind(this);
    this.updateRouteToPage = this.updateRouteToPage.bind(this);
    this.renderSocialPages = this.renderSocialPages.bind(this);
  }

  updateAuthState(authData) {
    this.setState({ authResponseData: authData });
  }

  updateRouteToPage(pageData) {
    console.log(pageData);
    this.setState({ routeToAuthPage: pageData });
  }

  renderAuthPages() {
    switch (this.state.routeToAuthPage) {
      case "login":
        return (
          <LoginPage
            updateAuthState={this.updateAuthState}
            updateRouteToPage={this.updateRouteToPage}
          />
        );
      case "signup":
        return (
          <SignUp
            updateAuthState={this.updateAuthState}
            updateRouteToPage={this.updateRouteToPage}
          />
        );

      case "forgotPassword":
        return (
          <ForgotPassword
            updateAuthState={this.updateAuthState}
            updateRouteToPage={this.updateRouteToPage}
          />
        );

      default:
        return null;
    }
  }

  renderSocialPages() {
    switch (this.state.routeToSocialPage) {
      case "landing":
        return <Landing updateAuthState={this.updateAuthState} />;

      default:
        return null;
    }
  }

  render() {
    var authResponse = JSON.parse(
      localStorage.getItem(authResponseStoredValue)
    );
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              {authResponse === null || authResponse === undefined ? (
                <>{this.renderAuthPages()}</>
              ) : (
                <>
                <div className="App">
                {this.renderSocialPages()}
                </div>
                </>
              )}
            </Route>
            <Route path="/forgotPasswordUpdate/:username/:token" exact component={ResetPassword} >
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  componentDidMount() {
    var authResponse = JSON.parse(
      localStorage.getItem(authResponseStoredValue)
    );

    if (authResponse !== null && authResponse !== undefined) {
      userReloginCheckToken(authResponse.token)
        .then((response) => {
          if (
            response.status !== 200 ||
            response.data.details !== "reloggedin"
          ) {
            localStorage.setItem(authResponseStoredValue, null);
            this.setState({ authResponseData: "restricted" });
          }
          else{
            localStorage.setItem(authResponseStoredValue, JSON.stringify(response.data));
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
}
