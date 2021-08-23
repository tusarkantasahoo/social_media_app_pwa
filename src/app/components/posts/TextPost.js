import React, { Component } from "react";
import userImage from "../../../assets/images/professionalImage.png";
import "./Post.css";
import like from "../../../assets/images/like.png";
import share from "../../../assets/images/network.png";
import comment from "../../../assets/images/comment.png";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import {getFileContentById,deletePostById} from "../../api/Api.js";
import bufferToDataUrl from "buffer-to-data-url";
import send from "../../../assets/images/send.png";
export default class ImagePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileId:this.props.props.fileStorageId,
      postImage:""
    };

    this._onClickDeletePost = this._onClickDeletePost.bind(this);
  }

  async _onClickDeletePost(item){
    var response = await deletePostById(item)
    if(response.status === 200){
      console.log("Post delete",response)
    }
  }
  render() {
    var userDetails = JSON.parse(localStorage.getItem(authResponseStoredValue));
     console.log("Incoming props",this.props.props)
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
                src={this.props.props.user.userImage}
                height="35px"
                width="35px"
                style={{ borderRadius: "25px" }}
              ></img>
            </div>
            <div className="col-10">
              <p style={{ fontSize: "22px", marginLeft: "-3%" }}>
                {this.props.props.user.name}
              </p>
              <p style={{ fontSize: "15px", marginLeft: "-3%",marginTop: "-1.5em" }}>
              {this.props.props.user.email}
              </p>
            </div>
            <div className="col-1">
              <p style={{ fontSize: "18px", cursor: "pointer" }}>Edit</p>
              <p onClick={() => this._onClickDeletePost(this.props.props)} style={{ fontSize: "18px", cursor: "pointer" }}>Delete</p>
            </div>
          </div>
          <p>{this.props.props.title}</p>
         
          <div
            onClick={() => {
              this.props.handelNewsClick();
              this.props.setNewsItem(this.props.props);
            }}
            style={{ textAlign: "center" }}
          >
            {/*  */}
          </div>
        

          <div className="row">
            <div className="col-1" style={{ textAlign: "right" }}>
              {this.props.isLoggedIn ? (
                <img
                  src={userDetails.userData.userImage}
                  style={{
                    width: "4em",
                    height: "4em",
                    borderRadius: "4em",
                    marginTop: "0.7em",
                    marginLeft: "2em",
                  }}
                ></img>
              ) : (
                <img
                src={userImage}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "60px",
                  marginTop: "0.7em",
                  marginLeft: "2em",
                }}
              ></img>
              )}
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
            <div className="col-1" style={{ textAlign: "left",cursor: "pointer"}}>
                  <img src={send} style={{height:"2.5em",width:"2.5em",marginTop: "1.5em",marginLeft:"-3em"}}>
                  </img>
                </div>
          </div>
        </div>
      </>
    );
  }

}
