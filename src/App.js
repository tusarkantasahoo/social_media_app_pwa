import React, { Component, useState, Fragment } from "react";
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
import PageWoLogin from "./app/pages/pageWoLogin/PageWoLogin.js";
import { createBrowserHistory } from "history";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authResponseData: null,
      routeToAuthPage: "pageWoLogin",
      routeToSocialPage: "landing",
      page: {},
    };

    this.updateAuthState = this.updateAuthState.bind(this);
    this.renderAuthPages = this.renderAuthPages.bind(this);
    this.updateRouteToPage = this.updateRouteToPage.bind(this);
    this.renderSocialPages = this.renderSocialPages.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  updateAuthState(authData) {
    this.setState({ authResponseData: authData });
  }

  updateRouteToPage(pageData) {
    console.log(pageData);
    this.setState({ routeToAuthPage: pageData });
  }
  setPage(item) {
    this.setState({ page: item });
  }

  renderAuthPages() {
    switch (this.state.routeToAuthPage) {
      case "pageWoLogin":
        return (
          <PageWoLogin
            updateAuthState={this.updateAuthState}
            updateRouteToPage={this.updateRouteToPage}
          />
        );
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
    console.log("page in app", this.state.page);
    console.log(window.location.pathname);
    var authResponse = JSON.parse(
      localStorage.getItem(authResponseStoredValue)
    );
    return (
      <div>
        <Route
          path="/"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <PageWoLogin
                  updateAuthState={this.updateAuthState}
                  updateRouteToPage={this.updateRouteToPage}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Home", code: "home" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />
        <Route
          path="/home"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <PageWoLogin
                  updateAuthState={this.updateAuthState}
                  updateRouteToPage={this.updateRouteToPage}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Home", code: "home" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />

        <Route
          path="/rooms"
          exact
          strict
          render={() => (
            <Landing
              updateAuthState={this.updateAuthState}
              page={{ name: "Rooms", code: "rooms" }}
              setPage={this.setPage}
              history={createBrowserHistory}
              isAuthed={true}
            />
          )}
        />

        <Route
          path="/academic"
          exact
          strict
          render={() => (
            <Landing
              updateAuthState={this.updateAuthState}
              page={{ name: "Academic", code: "academic" }}
              setPage={this.setPage}
              history={createBrowserHistory}
              isAuthed={true}
            />
          )}
        />

        <Route
          path="/academic"
          exact
          strict
          render={() => (
            <Landing
              updateAuthState={this.updateAuthState}
              page={{ name: "Academic", code: "academic" }}
              setPage={this.setPage}
              history={createBrowserHistory}
              isAuthed={true}
            />
          )}
        />

        <Route
          path="/login"
          exact
          strict
          render={() => (
            <LoginPage
              updateAuthState={this.updateAuthState}
              updateRouteToPage={this.updateRouteToPage}
            />
          )}

    
        />

        <Route
          path="/forgotPasswordUpdate/:username/:token"
          component={ResetPassword}
        ></Route>
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
          } else {
            localStorage.setItem(
              authResponseStoredValue,
              JSON.stringify(response.data)
            );
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
}
