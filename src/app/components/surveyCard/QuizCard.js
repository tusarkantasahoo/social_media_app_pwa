import React, { Component } from "react";
import history from "../../pages/history/History.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import close from "../../../assets/images/svg/close.png";
import { authResponseStoredValue } from "../../../utils/Constant.js";
export default class QuizCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var analytics = this.props.item.options;
    var total = 0;
    for (var i = 0; i < analytics.length; i++) {
      total = total + analytics[i].vote;
    }
    var userData = JSON.parse(localStorage.getItem(authResponseStoredValue));
    console.log("User Local Data", userData.userData._id);
    var userData = JSON.parse(localStorage.getItem(authResponseStoredValue));
    console.log("User Props Data", this.props.item.user._id);
    return (
      <>
        <div className="poll_card pr">
          {userData !== null &&
          userData !== undefined &&
          userData.userData !== null &&
          userData.userData !== undefined &&
          userData.userData._id !== null &&
          userData.userData._id !== undefined &&
          userData.userData._id === this.props.item.user._id ? (
            <img onClick={() =>this.props._deleteSurveyById(this.props.item._id)} src={close} className="close_btn" />
          ) : null}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={this.props.item.user.userImage}
              style={{ width: "2.5em", height: "2.5em", borderRadius: "2em" }}
            ></img>
            <p
              style={{
                fontSize: "22px",
                fontWeight: "400",
                marginLeft: "0.5em",
                fontWeight: "400",
              }}
            >
              Quiz by {this.props.item.user.name}{" "}
            </p>
          </div>
          <p style={{ fontSize: "18px", fontWeight: "600" }}>
            {this.props.item.title}{" "}
          </p>
          <div style={{ display: "flex", marginTop: "1em" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={"/survey/" + this.props.item._id}
            >
              <div>View Details</div>
            </Link>
            <Link
              style={{ textDecoration: "none", marginLeft: "50%" }}
              to={"/survey/" + this.props.item._id}
            >
              <div>Answer</div>
            </Link>
          </div>{" "}
          <br></br>
          <p>Response {this.props.item.userResponses.length}</p>
        </div>
      </>
    );
  }
}
