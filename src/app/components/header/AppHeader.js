import React, { Component } from "react";
import HeaderSearchBox from "../input/headerSearchBox/HeaderSearchBox.js";
import HeaderUser from "../headerUser/HeaderUser.js";
import "./AppHeader.css";
import logo from "../../../assets/images/logo.png"
import treepng from "../../../assets/images/treepng.png"
import user from "../../../assets/images/svg/user.png"
export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <div
            className="container mx-auto px-0"
            style={{ backgroundColor: "#0089ff", height: "50px" }}>
            <div className="row container mx-auto px-0">
              <div className="col px-0">
                <div className="logo_wrapper" >
                  <img src={treepng} className="img_res"></img>
                  <img src={logo} className="img_res"></img>
                </div>
              </div>
              <div className="col-5" style={{ textAlign: "center" }}>
                <HeaderSearchBox />
              </div>
              <div className="col-4" style={{ textAlign: "right", cursor: "pointer" }}>
                <HeaderUser updateAuthState={this.props.updateAuthState} _onClickUserDashboard={this.props._onClickUserDashboard} _changeScreenRender={this.props._changeScreenRender} />
              </div>

            </div>
          </div>
        ) : (
          <div
            className="container"
            style={{ backgroundColor: "#0089ff", height: "50px" }}>
            <div className="d-flex">
              <div className="logo_wrapper" >
                <img src={treepng} className="img_res"></img>
                <img src={logo} className="img_res"></img>
              </div>


              <div className="ml-auto user_w_login" onClick={() => this.props.updateRouteToPage("login")}>
                <img src={user} className=""></img>
                <p className="login_text">Login</p>
              </div>

            </div>
          </div>
        )}

      </>
    );
  }
}
