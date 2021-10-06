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
        style={{display:"flex",marginLeft:"25em",marginTop:"0.5em"}}
          onClick={() =>
            this.setState({ isUserClicked: !this.state.isUserClicked })
          }
        >
       
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
      
      
            <p style={{ fontSize: "18px", marginTop: "10px", color: "white",marginLeft:"1.5em" }}>
              {userDetails.userData.name}
            </p>
            {this.state.isUserClicked ? (
              <div
                style={{
                  textAlign: "left",
                  backgroundColor: "white",
                  // border: "0.5px solid #1da1f2",
                  borderRadius: "10px",
                  color: "black",
                  padding: "10px",
                  // position: "absolute",
                  boxShadow: "0 2px 5px 1px rgb(64 60 67 / 16%)"
                }}
              >
                <b>{userDetails.userData.email}</b>
                <p>{userDetails.userData.phone}</p>
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
                    // width: "10em",
                    outline: "0",
                    border: "none",
                    outline: "none",
                    borderRadius: "5px",
                    fontSize: "16px",
                    fontWeight: "600"
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
                    color: "#000",
                    backgroundColor: "#fff",
                    outline: "0",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "16px",
                    fontWeight: "600"
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
  
      </>
    );
  }
}
