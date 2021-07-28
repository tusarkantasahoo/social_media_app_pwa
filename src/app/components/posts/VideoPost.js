import React, { Component } from "react";
import userImage from "../../../assets/images/professionalImage.png";
import "./Post.css";
import ReactPlayer from "react-player";
import like from "../../../assets/images/like.png";
import share from "../../../assets/images/network.png";
import comment from "../../../assets/images/comment.png";
import { authResponseStoredValue } from "../../../utils/Constant.js";
export default class VideoPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var userDetails = JSON.parse(localStorage.getItem(authResponseStoredValue));
    return (
      <>
        <div
          style={{
            textAlign: "left",
            border: "0.5px solid #d4d1c5",
            marginTop: "10px",
            borderRadius: "15px",
            padding: "10px",
          }}
        >
          <div className="row">
            <div className="col-1">
              <img
                src={userImage}
                height="35px"
                width="35px"
                style={{ borderRadius: "25px" }}
              ></img>
            </div>
            <div className="col-10">
              <p style={{ fontSize: "22px", marginLeft: "-3%" }}>
                {this.props.props.title}
              </p>
            </div>
            <div className="col-1">
              <p style={{ fontSize: "18px", cursor: "pointer" }}>Edit</p>
            </div>
          </div>
          <p style={{ fontSize: "16px" }}>{this.props.props.description.substring(0,100)+"..."}</p>
          <div>
            {/* <img className="image-field-for-posts" src={this.props.props.image}></img> */}
            <ReactPlayer
              controls={true}
              pip
              width="60%"
              height="22em"
              playIcon="false"
              url={this.props.props.url}
              style={{ marginLeft: "20%" }}
            ></ReactPlayer>

            <div
              className="row"
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              <div className="col-4">
                <div style={{}}>
                  <img src={like} style={{ height: "2em", width: "2em" }} />
                </div>
              </div>
              <div className="col-4">
                <div>
                  <img
                    src={comment}
                    style={{ height: "2em", width: "2em" }}
                  ></img>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <img
                    src={share}
                    style={{ height: "2em", width: "2em" }}
                  ></img>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1" style={{ textAlign: "right" }}>
                <img
                  src={userDetails.userData.userImage}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "60px",
                    marginTop: "0.7em",
                    marginLeft: "2em",
                  }}
                ></img>
              </div>
              <div className="col-10" style={{ textAlign: "left" }}>
                <div
                  style={{
                    padding: "10px",
                    marginLeft: "0",
                    marginTop: "10px",
                    textAlign: "left",
                  }}
                >
                  <input
                    value={this.state.postText}
                    onChange={(e) => {}}
                    placeholder="Comment"
                    style={{
                      width: "90%",
                      height: "50px",
                      marginLeft: "5%",
                      outline: "0",
                      border: "0.5px solid #d4d1c5",
                      borderRadius: "10px",
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
