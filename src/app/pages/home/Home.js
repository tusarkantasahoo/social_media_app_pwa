import React, { Component } from "react";
import PostMessageBox from "../../components/homeSocial/postMessgaeBox/PostMessageBox.js";
import signUpHomePage from "../../../assets/images/signUpHomePage.PNG";
import inviteFriendsImage from "../../../assets/images/invitefriends.PNG";
import allIconsHome from "../../../assets/images/allIconHome.PNG"
import "./Home.css";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }
  render() {
    return (
      <>
        <PostMessageBox />
        <div className="home-all-details" style={{ marginTop: "3%" }}>
          <p style={{ color: "#0089ff", fontSize: "42px" }}>Who we are ?</p>
          <p style={{ fontSize: "30px" }}>
            Where individuals meets Education / Career / Jobs <br></br>
            Skills / Community at single Platform
          </p>
          <img src={allIconsHome} style={{height:"21em",width:"60em"}}></img>
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
            <div className="col-6" style={{ textAlign: "left",marginTop:"10%" }}>
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
