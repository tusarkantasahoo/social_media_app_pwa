import React, { Component } from "react";
import HomeOptions from "../../components/homeOptions/HomeOptions.js";
import HomeSocial from "../../components/homeSocial/HomeSocial.js";
import AppHeader from "../../components/header/AppHeader.js";
import { userReloginCheckToken } from "../../../auth/AuthApi.js";
import UserDetails from "../../pages/userDetails/UserDetails.js";
import Academic from "../academic/Academic.js";
import Survey from "../survey/Survey.js";
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
        ,
        { name: "Forum", code: "Forum" },
        { name: "Survey", code: "survey" },
        { name: "Self Help", code: "selfHelp" },
        { name: "Jobs", code: "jobs" },
        { name: "Skills", code: "skills" },
        { name: "Repository", code: "repository" },
      ],
      currentOption: { name: "Home", code: "home" },
      isUserDashboard: false,
      screenManage: "social",
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateOptionOnClick = this.updateOptionOnClick.bind(this);
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
    switch (this.state.currentOption.code) {
      case "home":
        return (
          <div className="col-7" id="home-social">
            <HomeSocial props={this.state} isLoggedIn={true} />
          </div>
        );

        case "rooms":
        return (
          <div className="col-7" id="home-social">
            <HomeSocial props={this.state} isLoggedIn={true} />
          </div>
        );

      case "userDetails":
        return (
          <div className="col-10" id="home-social">
            <UserDetails
              _onClickUserDashboard={this._onClickUserDashboard}
              isLoggedIn={true}
            />
          </div>
        );

      case "academic":
        return (
          <div className="col-10" id="home-social">
            Full screen
            <Academic />
          </div>
        );

      case "survey":
        return (
          <div className="col-10" id="home-social">
            Full screen
            <Survey />
          </div>
        );

      default:
        return null;
    }
  }

  render() {
    return (
      <>
        <AppHeader
          updateAuthState={this.props.updateAuthState}
          _onClickUserDashboard={this._onClickUserDashboard}
          isLoggedIn={true}
          _changeScreenRender={this._changeScreenRender}
        />
        <div className="container-fluid">
          <div className="row">
            <div
              className="sideBar"
              id="home-options"
              style={{
                boxShadow: "0px 2px 3px #dbd8d7",
                height: `${this.state.height.toString() - 60}px`,
              }}
            >
              <HomeOptions
                props={this.state}
                updateOptionOnClick={this.updateOptionOnClick}
                isLoggedIn={true}
              />
            </div>
            {this.renderScreenDependingOnSelection()}
          </div>
        </div>
      </>
    );
  }
  updateOptionOnClick(item) {
    console.log("option", item);
    this.setState({
      currentOption: item,
    });
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
