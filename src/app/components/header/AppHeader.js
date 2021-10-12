import React, { Component } from "react";
import HeaderSearchBox from "../input/headerSearchBox/HeaderSearchBox.js";
import HeaderUser from "../headerUser/HeaderUser.js";
import "./AppHeader.css";
// import HomeIcon from '@mui/icons-material/Home';
import logo from "../../../assets/images/logo.png";
import user_w from "../../../assets/images/user_w.png";
import treepng from "../../../assets/images/treepng.png";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import monastreeLogo from "../../../assets/images/phase2Img/m.png";
import home from "../../../assets/images/phase2Img/home.png"
import bell from "../../../assets/images/phase2Img/bell.png"
import comment from "../../../assets/images/phase2Img/msg.png";
// import NotificationsIcon from '@mui/icons-material/Notifications.js';
// import commentIcon from '@mui/icons-material/Help.js';
// import SettingsIcon from '@mui/icons-material/Settings.js';
export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("Props in headre", this.props);
    return (
      <>
        {this.props.isLoggedIn ? (
          <div className="container-fluid nav_wrap">
            <div className="container_custom d-flex jcsb aic">
              <div className="logo_wrapper">
                <img src={monastreeLogo} className="img_res"></img>
                <p style={{ color: "white", marginTop: "-0.5em" }}>MONASTREE</p>
              </div>

              <HeaderSearchBox />
              <div className="d-flex">
                {/* <p style={{ fontSize: "18px", fontWeight: "bold", color: "white", marginLeft: "1em", marginTop: "1em" }}>NEWS FEED</p> */}

                {/* <img src={home} style={{ height: "2em", width: "2em", marginTop: "1em", marginLeft: "3em" }} className="img_res"></img> */}
                <img src={comment} style={{ height: "2em", width: "2em", marginTop: "1em", marginLeft: "3em" }} className="img_res"></img>
                <img src={bell} style={{ height: "2em", width: "2em", marginTop: "1em", marginLeft: "3em" }} className="img_res"></img>
                <div style={{ textAlign: "right", cursor: "pointer" }}>
                  <HeaderUser
                    updateAuthState={this.props.updateAuthState}
                    _onClickUserDashboard={this.props._onClickUserDashboard}
                    _changeScreenRender={this.props._changeScreenRender}
                  />
                </div>
              </div>

            </div>
          </div>


        ) : (

          <div
            className="container-fluid"
            style={{ display: "flex", height: "4em", backgroundImage: "linear-gradient(to right,#111820, #9e9ebb)" }}
          >


            <div className="logo_wrapper">
              <img src={monastreeLogo} className="img_res"></img>
              <p style={{ color: "white", marginTop: "-0.5em" }}>MONASTREE</p>
            </div>

            <HeaderSearchBox />
            <img src={comment} style={{ height: "2em", width: "2em", marginTop: "1em", marginLeft: "3em" }} className="img_res"></img>
            <div style={{ textAlign: "right", cursor: "pointer" }}>
              <div
                className="col-4 d-flex jcfe aic">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <img src={user_w} className="userIcon" />
                </Link>
              </div>
            </div>

          </div>



        )}
      </>
    );
  }
}
