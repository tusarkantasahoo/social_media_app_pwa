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
import home from "../../../assets/images/phase2Img/home.png";
import bell from "../../../assets/images/phase2Img/bell.png";
import comment from "../../../assets/images/phase2Img/msg.png";
import college from "../../../assets/images/menu.png";
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
            <div className="pr">
              <img
                src={college}
                className="menuBar"
                id="menuBar"
                onClick={() => {
                  this.props._changeNavActive();
                }}
              />
            </div>
            <div className="container_custom d-flex jcsb aic">
              <div className="logo_wrapper d-flex mb-0">
                <img src={logo} className="img_res"></img>
                <p style={{ color: "white", marginTop: "-0.5em" }}></p>
              </div>

              <HeaderSearchBox />
              <div className="d-flex">
                <img
                  src={comment}
                  style={{
                    height: "2em",
                    width: "2em",
                    marginTop: "1em",
                    marginLeft: "3em",
                  }}
                  className="img_res"
                ></img>
                <img
                  src={bell}
                  style={{
                    height: "2em",
                    width: "2em",
                    marginTop: "1em",
                    marginLeft: "3em",
                  }}
                  className="img_res"
                ></img>
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
          <div className="container-fluid nav_wrap">
            <div className="pr">
              <img
                src={college}
                className="menuBar"
                id="menuBar"
                onClick={() => {
                  this.props._changeNavActive();
                }}
              />
            </div>
            <div className="container_custom d-flex jcsb aic">
              <div className="logo_wrapper d-flex mb-0">
                <img src={logo} className="img_res"></img>
                <p style={{ color: "white", marginTop: "-0.5em" }}></p>
              </div>

              <HeaderSearchBox />
              <div className="d-flex">
                <img
                  src={comment}
                  style={{ height: "2em", width: "2em" }}
                  className="img_res me-3"
                ></img>
                <div style={{ textAlign: "right", cursor: "pointer" }}>
                  <Link to="/login" className="td_none ms-3 mb-0">
                    <img src={user_w} className="userIcon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
