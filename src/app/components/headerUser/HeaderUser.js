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
        <div
          className="row"
          onClick={() =>
            this.setState({ isUserClicked: !this.state.isUserClicked })
          }
        >
          <div className="col-4" style={{ textAlign: "right" }}></div>
          <div className="col-1" style={{ textAlign: "right" }}>
            <img
              src={userDetails.userData.userImage}
              style={{
                borderRadius: "60px",
                marginRight: "-17px",
                marginTop: "5px",
              }}
              height="40px"
              width="45px"
            />
          </div>
          <div className="col-7" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "18px", marginTop: "10px", color: "white" }}>
              {userDetails.userData.name}
            </p>
            {this.state.isUserClicked ? (
              <div
                style={{
                  textAlign: "left",
                  backgroundColor: "white",
                  border: "0.5px solid #1da1f2",
                  borderRadius: "10px",
                  color: "black",
                  padding: "10px",
                }}
              >
                <b>Email : {userDetails.userData.email}</b>
                <p>Phone:{userDetails.userData.phone}</p>
                {/* <p>Other details:</p> */}
                <button
                  onClick={() => {
                    this.props._onClickUserDashboard();

                    this.props._changeScreenRender({
                      name: "User Details",
                      code: "userDetails",
                    });
                  }}
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    width: "10em",
                    outline: "0",
                    border: "0.5px solid #1da1f2",
                    borderRadius: "5px",
                  }}
                >
                  User Dashboard
                </button>
                <br></br>
                <br></br>

                <button
                  onClick={() => {
                    localStorage.setItem(authResponseStoredValue, null);
                    //  this.props.props.history.push("/")
                    this.props.updateAuthState(null);
                  }}
                  style={{
                    color: "white",
                    backgroundColor: "#1da1f2",
                    width: "10em",
                    outline: "0",
                    border: "0.5px solid blue",
                    borderRadius: "5px",
                  }}
                >
                  Signout
                </button>
                {/* <p style={{fontWeight:"bold"}} onClick={()=>{
                 localStorage.setItem(authResponseStoredValue,null);
                    // this.props.props.history.push("/")
                    this.props.updateAuthState(null);
             }}>Signout</p> */}
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
