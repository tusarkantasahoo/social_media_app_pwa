import React, { Component } from "react";
import HomeOptions from "../../components/homeOptions/HomeOptions.js";
import HomeSocial from "../../components/homeSocial/HomeSocial.js";
import AppHeader from "../../components/header/AppHeader.js";
import { userReloginCheckToken } from "../../../auth/AuthApi.js";
import UserDetails from "../../pages/userDetails/UserDetails.js";
import Academic from "../academic/Academic.js";
import Survey from "../survey/Survey.js";
import SurveyResponse from "../survey/SurveyResponse.js";
import CollegePage from "../academic/CollegePage.js";
import CommingSoon from "../commingSoon/CommingSoon.js";
import CollegeDetails from "../academic/CollegeDetails.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      optionArray: [
        { name: "Home", code: "home" },
        { name: "Rooms", code: "rooms" },
        { name: "Academic", code: "academic" },
        { name: "Career", code: "career" },
        { name: "Forum", code: "Forum" },
        { name: "Survey", code: "survey" },
        { name: "Self Help", code: "selfHelp" },
        { name: "Jobs", code: "jobs" },
        { name: "Skills", code: "skills" },
        { name: "Repository", code: "repository" },
      ],
      currentOption: props.page,
      isUserDashboard: false,
      screenManage: "social",
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this.updateOptionOnClick = this.updateOptionOnClick.bind(this);
    this._onClickUserDashboard = this._onClickUserDashboard.bind(this);
    this.renderScreenDependingOnSelection =
      this.renderScreenDependingOnSelection.bind(this);
    this._changeScreenRender = this._changeScreenRender.bind(this);
  }

  _onClickUserDashboard() {
    this.setState({ isUserDashboard: !this.state.isUserDashboard });
  }

  _changeScreenRender(data) {
    this.setState({ currentOption: data });
  }

  renderScreenDependingOnSelection() {
    console.log("Home render", this.state.currentOption.code);
    switch (this.state.currentOption.code) {
      case "home":
        return (
          <div className="col-7" id="home-social">
            <HomeSocial props={this.state} isLoggedIn={this.props.isAuthed} />
          </div>
        );

      case "rooms":
        return (
          <div className="col-7" id="home-social">
            <HomeSocial props={this.state} isLoggedIn={this.props.isAuthed} />
          </div>
        );

      case "userDetails":
        return (
          <div className="col-10" id="home-social">
            <UserDetails
              _onClickUserDashboard={this._onClickUserDashboard}
              isLoggedIn={this.props.isAuthed}
            />
          </div>
        );

      case "academic":
        return (
          <div className="col-10" id="">
            <Academic />
          </div>
        );

      case "survey":
        return (
          <div className="col-10" id="home-social">
            <Survey />
          </div>
        );

      case "surveyResponse":
        return (
          <div className="col-10" id="home-social">
            <SurveyResponse />
          </div>
        );

      case "college":
        return (
          <div className="col-10" id="home-social">
            <CollegePage />
          </div>
        );

        case "collegeDetails":
          return (
            <div className="col-10" id="home-social">
              <CollegeDetails />
            </div>
          );

      case "career":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );
      case "jobs":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );
      case "forum":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );

      case "selfHelp":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );

      case "skills":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );

      case "repository":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );

      case "planner":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );
      case "others":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );

      default:
        return null;
    }
  }

  render() {
    console.log("Room constructor called", this.props);
    console.log("Room constructor called2", this.state);
    return (
      <>
        <AppHeader
          updateAuthState={this.props.updateAuthState}
          _onClickUserDashboard={this._onClickUserDashboard}
          isLoggedIn={this.props.isAuthed}
          _changeScreenRender={this._changeScreenRender}
        />
        <div className="container-fluid">
          <div className="row" style={{ display: "flex" }}>
            <div
              className="col-2"
              id="home-options"
              style={{
                boxShadow: "0px 2px 3px #dbd8d7",
                height: `${this.state.height.toString() - 60}px`,
              }}
            >
              <HomeOptions
                props={this.state}
                isLoggedIn={true}
                setPage={this.props.setPage}
                history={this.props.history}
              />
            </div>
            {this.renderScreenDependingOnSelection()}
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    console.log("dimensions", this.state.width, this.state.height);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
}
