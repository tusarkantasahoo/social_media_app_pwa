import React, { Component } from "react";
import HeaderSearchBox from "../input/headerSearchBox/HeaderSearchBox.js";
import HeaderUser from "../headerUser/HeaderUser.js";
import "./AppHeader.css";

import logo from "../../../assets/images/logo.png";
import user_w from "../../../assets/images/user_w.png";
import treepng from "../../../assets/images/treepng.png";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
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
          <div
            className="container-fluid px-0"
            style={{ backgroundColor: "#0089ff", height: "50px" }}
          >
            <div className="d-flex container mx-auto px-0">
              <div className="logo_wrapper">
                <img src={treepng} className="img_res"></img>
                <img src={logo} className="img_res"></img>
              </div>
              <div className="col-md-1" style={{ textAlign: "center" }}>
                <HeaderSearchBox />
              </div>
              <div
                className="col-4"
                style={{ textAlign: "right", cursor: "pointer" }}
              >
                <HeaderUser
                  updateAuthState={this.props.updateAuthState}
                  _onClickUserDashboard={this.props._onClickUserDashboard}
                  _changeScreenRender={this.props._changeScreenRender}
                />
              </div>
            </div>
          </div>
        ) : (

          <div
            className="container-fluid px-0"
            style={{ backgroundColor: "#0089ff", height: "50px" }}
          >
            <div className="d-flex container_custom jcsb mx-auto px-3">
             
                <div className="logo_wrapper col-md-4">
                  <img src={treepng} className="img_res"></img>
                  <img src={logo} className="img_res"></img>
                </div>
             
              <div className="col-md-4 d-flex aic" style={{ textAlign: "center" }}>
                <HeaderSearchBox />
              </div>
              <div
                className="col-md-4 d-flex jcfe aic">
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
