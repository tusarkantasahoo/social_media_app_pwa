import React, { Component } from "react";
import userImage from "../../../assets/images/professionalImage.png";
import { authResponseStoredValue } from "../../../utils/Constant.js";
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
        <div className="text-center px-3 pr" onClick={() => this.setState({ isUserClicked: !this.state.isUserClicked })}>
          <img src={userDetails.userData.userImage} className="user_pic" />
          <p className="mb-0 text-light">
            {userDetails.userData.name}
          </p>
          {this.state.isUserClicked ? (
            <div className="shadow-lg user_dd">
              <p>{userDetails.userData.email}</p>
              <p className="d-none">{userDetails.userData.phone}</p>
              <a
                className="user_actn mb-3"
                onClick={() => {
                  this.props._onClickUserDashboard();
                  this.props._changeScreenRender({
                    name: "User Details",
                    code: "userDetails",
                  });
                }}
              >
                User Dashboard
              </a>
              <a
                className="user_actn"
                onClick={() => {
                  localStorage.setItem(authResponseStoredValue, null);
                  this.props.updateAuthState(null);
                }}
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
