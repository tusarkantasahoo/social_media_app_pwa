import React, { Component } from "react";
import PostMessageBox from "../../components/homeSocial/postMessgaeBox/PostMessageBox.js";
import signUpHomePage from "../../../assets/images/signUpHomePage.PNG";
import inviteFriendsImage from "../../../assets/images/invitefriends.PNG";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
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
          <h3 style={{ color: "#0089ff" }}>Who we are ?</h3>
          <h5>
            Where individuals meets Education / Career / Jobs <br></br>
            Skills / Community at single Platform
          </h5>
          {/* <img src={allIconsHome} style={{height:"21em",width:"60em"}}></img> */}
          <div className="">
            <div className="d-flex flex-wrap justify-content-between col">
              <Card className="root menuCard col-sm-11 col-md-3 col-lg-2" variant="outlined">
                <CardContent>
                  <img src={roomicon}></img>
                  <h6>Room</h6>
                </CardContent>
              </Card>
              <Card className="root menuCard col-sm-11 col-md-3 col-lg-2" variant="outlined">
                <CardContent>
                  <img src={academicicon}></img>
                  <h6>Academic</h6>
                </CardContent>
              </Card>
              <Card className="root menuCard col-sm-11 col-md-3 col-lg-2" variant="outlined">
                <CardContent>
                  <img src={careericon}></img>
                  <h6>Career</h6>
                </CardContent>
              </Card>
              <Card className="root menuCard col-sm-11 col-md-3 col-lg-2" variant="outlined">
                <CardContent>
                  <img src={jobicon}></img>
                  <h6>Jobs</h6>
                </CardContent>
              </Card>
              <Card className="root menuCard col-sm-11 col-md-3 col-lg-2" variant="outlined">
                <CardContent>
                  <img src={repoicon}></img>
                  <h6>repository</h6>
                </CardContent>
              </Card>
            </div>

            <div className="d-flex flex-wrap justify-content-between col mt-4">
              <Card className="root menuCard col-sm-11 col-md-3 col-lg-2" variant="outlined">
                <CardContent>
                  <img src={forumicon}></img>
                  <h6>Forum</h6>
                </CardContent>
              </Card>
              <Card className="root menuCard col-sm-11 col-md-3 col-lg-2" variant="outlined">
                <CardContent>
                  <img src={surveyicon}></img>
                  <h6>Survey</h6>
                </CardContent>
              </Card>
              <Card className="root menuCard col-sm-11 col-md-3 col-lg-2" variant="outlined">
                <CardContent>
                  <img src={plannericon}></img>
                  <h6>Planner</h6>
                </CardContent>
              </Card>
              <Card className="root menuCard col-sm-11 col-md-3 col-lg-2" variant="outlined">
                <CardContent>
                  <img src={skillicon}></img>
                  <h6>Skill</h6>
                </CardContent>
              </Card>
              <Card className="root menuCard col-sm-11 col-md-3 col-lg-2" variant="outlined">
                <CardContent>
                  <img src={othericon}></img>
                  <h6>Other</h6>
                </CardContent>
              </Card>
            </div>
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
            <div className="col-6" style={{ textAlign: "left", marginTop: "10%" }}>
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
