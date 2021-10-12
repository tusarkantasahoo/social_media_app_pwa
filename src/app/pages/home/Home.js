import React, { Component } from "react";
import PostMessageBox from "../../components/homeSocial/postMessgaeBox/PostMessageBox.js";
import signUpHomePage from "../../../assets/images/signUpHomePage.PNG";
import inviteFriendsImage from "../../../assets/images/invitefriends.PNG";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
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
import arrowRight from "../../../assets/images/arrowRight.png";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Cardbox from "../../components/card/Card.js";
import "./Home.css";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }
  render() {
    return (
      <>
        <PostMessageBox isLoggedIn={this.props.isLoggedIn} />
        <div className="home-all-details" style={{ marginTop: "3%" }}>
          <h4 style={{ color: "#0089ff" }}>Who we are ?</h4>
          <p>
            Where individuals meets Education / Career / Jobs <br></br>
            Skills / Community at single Platform
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", }}>
            <Cardbox image={roomicon} name={"Room"} desc="Here you can share your thoughts whats happening news Stories and Informative videos" />
            <Cardbox image={academicicon} name={"Academic"} desc="Here you can find your college and deatils about college" />
            <Cardbox image={careericon} name={"Career"} desc="Here you can Know your career options using different tools" />
            <Cardbox image={forumicon} name={"Forum"} desc="Here you can Ask questions and gert help" />
            <Cardbox image={surveyicon} name={"Survey"} desc="Using this tool apperr in survey. and post surveys too. It can be 3 types Polling Research and Quiz" />
            <Cardbox image={jobicon} name={"Job"} desc="Here you can share your thoughts whats happening news Stories and Informative videos" />
            <Cardbox image={othericon} name={"Other"} desc="Here you can share your thoughts whats happening news Stories and Informative videos" />
            <Cardbox image={plannericon} name={"Planner"} desc="Here you can share your thoughts whats happening news Stories and Informative videos" />
            <Cardbox image={repoicon} name={"Repo"} desc="Here you can share your thoughts whats happening news Stories and Informative videos" />
            <Cardbox image={skillicon} name={"Skill"} desc="Here you can share your thoughts whats happening news Stories and Informative videos" />


          </div>
        </div>
        <div style={{ marginTop: "15%" }}>
          <div className="row">
            <div className="col-7" style={{ textAlign: "left" }}>
              <p style={{ fontSize: "28px" }}>Create Account</p>
              <p style={{ fontSize: "12px" }}>
                We all need to start well must explain to you how all thia
                mistaken idea of denouncing pleasure and praising pain was born
                and I will give you a complete account of the system and expound
              </p>
              <div className="div-box-input-create-Account-Homepage">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <input
                    type="text"
                    className="input-create-Account-Homepage"
                    placeholder="Email Address"
                  ></input>
                  <button className="Create-account-submit-button-homepage">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="col-5">
              <img
                src={signUpHomePage}
                style={{ height: "364px", width: "376px" }}
              ></img>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "3%" }}>
          <div className="row">
            <div className="col-6">
              <img
                src={inviteFriendsImage}
                style={{ height: "364px", width: "376px" }}
              ></img>
            </div>
            <div
              className="col-6"
              style={{ textAlign: "left", marginTop: "10%" }}
            >
              <p style={{ fontSize: "28px" }}>Invite Friend</p>
              <p style={{ fontSize: "12px" }}>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and prasing pain was born and I will give
                you a complete account of the system and expound the actual
                teachings
              </p>
              <div className="div-box-input-create-Account-Homepage">
                <button className="get-started-submit-button-homepage">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
