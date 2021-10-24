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
import CollegePage from "./app//pages/academic/CollegePage.js";
import CommingSoon from "./app/pages/commingSoon/CommingSoon.js";
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
    this.updateRouteToPage = this.updateRouteToPage.bind(this);
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

  render() {
    console.log("page in app", this.state.page);
    console.log(window.location.pathname);
    var authResponse = JSON.parse(
      localStorage.getItem(authResponseStoredValue)
    );
    return (
      <>
        <Route
          path="/"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Home", code: "home" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
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
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Home", code: "home" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
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
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Rooms", code: "rooms" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Rooms", code: "rooms" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />

        <Route
          path="/academic"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Academic", code: "academic" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Academic", code: "academic" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />

        <Route
          path="/academic/college"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Academic", code: "college" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Academic", code: "college" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />

<Route
          path="/academic/college/:id"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Academic", code: "collegeDetails" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Academic", code: "collegeDetails" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />

        <Route
          path="/survey"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "survey" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "survey" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />
        <Route
          path="/survey/:id"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "surveyResponse" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "surveyResponse" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />

        <Route
          path="/career"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "career" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "career" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />
        <Route
          path="/jobs"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "jobs" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "jobs" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />

        <Route
          path="/forum"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "forum" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "forum" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />

        <Route
          path="/selfHelp"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "selfHelp" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "selfHelp" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />

        <Route
          path="/skills"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "skills" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "skills" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />
                <Route
          path="/userDetails"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "userDetails", code: "userDetails" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "userDetails", code: "userDetails" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />

        <Route
          path="/repository"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "repository" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "repository" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />
        <Route
          path="/planner"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "planner" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "planner" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
        />

<Route
          path="/others"
          exact
          strict
          render={() => {
            if (authResponse === null || authResponse === undefined) {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "others" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={false}
                />
              );
            } else {
              return (
                <Landing
                  updateAuthState={this.updateAuthState}
                  page={{ name: "Survey", code: "others" }}
                  setPage={this.setPage}
                  history={createBrowserHistory}
                  isAuthed={true}
                />
              );
            }
          }}
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
          path="/signup"
          exact
          strict
          render={() => (
            <SignUp
              updateAuthState={this.updateAuthState}
              updateRouteToPage={this.updateRouteToPage}
            />
          )}
        />

<Route
          path="/forgotPassword"
          exact
          strict
          render={() => (
            <ForgotPassword
              updateAuthState={this.updateAuthState}
              updateRouteToPage={this.updateRouteToPage}
            />
          )}
        />
        

        <Route
          path="/forgotPasswordUpdate/:username/:token"
          component={ResetPassword}
        ></Route>
      </>
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