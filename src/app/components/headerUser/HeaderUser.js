import React, { Component } from "react";
import userImage from "../../../assets/images/professionalImage.png";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import user_w from "../../../assets/images/user_w.png";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
export default class HeaderUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserClicked: false,
    };
  }

  render() {
    var userDetails = JSON.parse(localStorage.getItem(authResponseStoredValue));

    return (
      <>
        <div
          className="text-center px-3 pr"
          onClick={() =>
            this.setState({ isUserClicked: !this.state.isUserClicked })
          }
        >
          <img
            src={
              userDetails.userData.userImage !== null &&
              userDetails.userData.userImage !== undefined
                ? userDetails.userData.userImage
                : user_w
            }
            className="user_pic"
          />
          <p className="mb-0 text-light">{userDetails.userData.name}</p>
          {this.state.isUserClicked ? (
            <div
              className="shadow-lg user_dd"
              style={{ backgroundColor: "#ffffff", color: "black" }}
            >
              <p>{userDetails.userData.email}</p>
              <p className="d-none">{userDetails.userData.phone}</p>

              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/userDetails"}
              >
                <p
                  className="user_actn mb-3"
                  onClick={() => {
                    // this.props._onClickUserDashboard();
                    // this.props._changeScreenRender({
                    //   name: "User Details",
                    //   code: "userDetails",
                    // });
                  }}
                  style={{ color: "black" }}
                >
                  User Dashboard
                </p>
              </Link>

              <a
                className="user_actn"
                onClick={() => {
                  localStorage.setItem(authResponseStoredValue, null);
                  this.props.updateAuthState(null);
                }}
                style={{ color: "black" }}
              >
                Signout
              </a>
            </div>
          ) : null}
        </div>
      </>
    );
  }
}
