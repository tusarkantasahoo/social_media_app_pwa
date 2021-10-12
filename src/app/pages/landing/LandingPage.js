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
import careericon from "../../../assets/images/home/career.png";
import forumicon from "../../../assets/images/home/forum.png";
import jobicon from "../../../assets/images/home/job.png";
import othericon from "../../../assets/images/home/others.png";
import plannericon from "../../../assets/images/home/planner.png";
import repoicon from "../../../assets/images/home/repo.png";
import roomicon from "../../../assets/images/home/room.png";
import skillicon from "../../../assets/images/home/skills.png";
import academicicon from "../../../assets/images/home/book.png";
import surveyicon from "../../../assets/images/home/survey.png";
import home from "../../../assets/images/phase2Img/home.png";
import girl from "../../../assets/images/girl.jpg";
import girl1 from "../../../assets/images/girl1.jfif";
import girl2 from "../../../assets/images/girl2.jpg";
import girl3 from "../../../assets/images/girl3.jpg";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      optionArray: [
        { name: "Home", code: "home", icon: home },
        { name: "Rooms", code: "rooms", icon: roomicon },
        { name: "Academic", code: "academic", icon: academicicon },
        { name: "Career", code: "career", icon: careericon },
        { name: "Forum", code: "Forum", icon: forumicon },
        { name: "Survey", code: "survey", icon: surveyicon },
        { name: "Self Help", code: "selfHelp", icon: othericon },
        { name: "Jobs", code: "jobs", icon: careericon },
        { name: "Skills", code: "skills", icon: skillicon },
        { name: "Repository", code: "repository", icon: repoicon },
      ],
      currentOption: props.page,
      isUserDashboard: false,
      screenManage: "social",
      people: [
        {
          name: "Jennifer Sen",
          image: girl,
        },
        {
          name: "Lawrence Sahoo",
          image: girl1
        },
        {
          name: "Emaa Watson",
          image: girl2,
        },
        {
          name: "Jane foster",
          image: girl3,
        },
        {
          name: "Becker joe",
          image: girl,
        },
        {
          name: "Jenny may",
          image: girl1
        },
      ]
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
          <>
            <div id="c_body" className="c_body">
              {/* <p style={{fontSize:"25px",marginLeft:"0.5em",fontWeight:"500",marginTop:"0.5em",boxShadow: "1px 1px 1px  #dbd8d7"}}>Home</p> */}
              <div>
                <HomeSocial props={this.state} isLoggedIn={this.props.isAuthed} />
              </div>
            </div>

          </>
        );

      case "rooms":
        return (
          <>

            <div className="c_body">
              <HomeSocial props={this.state} isLoggedIn={this.props.isAuthed} />
            </div>
          </>
        );

      case "userDetails":
        return (
          <div className="c_body" id="home-social">
            <UserDetails
              _onClickUserDashboard={this._onClickUserDashboard}
              isLoggedIn={this.props.isAuthed}
            />
          </div>
        );

      case "academic":
        return (
          <div className="c_body">
            <Academic />
          </div>

        );

      case "survey":
        return (
          <div className="c_body">
            <Survey />
          </div>

        );

      case "surveyResponse":
        return (
          <div className="c_body">
            <SurveyResponse />
          </div>

        );

      case "college":
        return (
          <div className="c_body_fw">
            <CollegePage />
          </div>

        );

      case "collegeDetails":
        return (
          <div className="c_body_fw">
            <CollegeDetails />
          </div>

        );

      case "career":
        return (
          <div className="c_body" id="home-social">
            <CommingSoon />
          </div>
        );
      case "jobs":
        return (
          <div className="c_body" id="home-social">
            <CommingSoon />
          </div>
        );
      case "forum":
        return (
          <div className="c_body" id="home-social">
            <CommingSoon />
          </div>
        );

      case "selfHelp":
        return (
          <div className="c_body" id="home-social">
            <CommingSoon />
          </div>
        );

      case "skills":
        return (
          <div className="c_body" id="home-social">
            <CommingSoon />
          </div>
        );

      case "repository":
        return (
          <div className="c_body" id="home-social">
            <CommingSoon />
          </div>
        );

      case "planner":
        return (
          <div className="c_body" id="home-social">
            <CommingSoon />
          </div>
        );
      case "others":
        return (
          <div className="c_body" id="home-social">
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
        <div className="container_custom" style={{ display: "flex", marginTop: "70px" }}>


          <HomeOptions
            props={this.state}
            isLoggedIn={true}
            setPage={this.props.setPage}
            history={this.props.history}
          />


          {this.renderScreenDependingOnSelection()}
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
