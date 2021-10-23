import React, { Component } from "react";
import userImage from "../../../assets/images/professionalImage.png";
import "./Post.css";
import ReactPlayer from "react-player";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import { getFileContentById, deletePostById, addLikeForPost,createCommentForPost,addDislikeForPost } from "../../api/Api.js";
import bufferToDataUrl from "buffer-to-data-url";
import send from "../../../assets/images/send.png";
import like from "../../../assets/images/svg/like.png";
import dislike from "../../../assets/images/svg/dislike.png";
import share from "../../../assets/images/svg/share.png";
import more from "../../../assets/images/svg/more.png";
// import share from "../../../assets/images/network.png";
import Tooltip from "@material-ui/core/Tooltip";
import { Dropdown } from "react-bootstrap";
import comment from "../../../assets/images/comment.png";
import MaterialIcon, { colorPalette } from "material-icons-react";
export default class VideoPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileId: this.props.props.fileStorageId,
      videoUrl: "",
      likes: this.props.props.likes,
      comment: "",
      isCommentVisible: false,
      dislikes: this.props.props.dislikes,
      commentsArray:this.props.props.comments
    };
    this._onClickDeletePost = this._onClickDeletePost.bind(this);
    this.dateFromObjectId = this.dateFromObjectId.bind(this);
    this._onClickLike = this._onClickLike.bind(this);
    this._onClickSendComment = this._onClickSendComment.bind(this);
    this._onClickDislike = this._onClickDislike.bind(this);
  }
  async _onClickDeletePost(item) {
    var response = await deletePostById(item);
    if (response.status === 200) {
      console.log("Post delete", response);
    }
  }
  dateFromObjectId(objectId) {
    console.log("ONN id", objectId);
    var dt = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    return dt.toString();
  }
  async _onClickLike(postId) {
    var userData = JSON.parse(localStorage.getItem(authResponseStoredValue));
    var postJson = {
      id: postId,
      userId: userData.userData.id,
      data:"like"
    };
    var response = await addLikeForPost(postJson);
    if (response.status === 200) {
      console.log("Liked");
      this.setState({ likes: this.state.likes + 1 })
    }
  }

  async _onClickDislike(postId) {
    var userData = JSON.parse(localStorage.getItem(authResponseStoredValue));
    var postJson = {
      id: postId,
      userId: userData.userData.id,
      data:"dislike"
    };
    var response = await addDislikeForPost(postJson);
    if (response.status === 200) {
      console.log("dislke");
      this.setState({ dislikes: this.state.dislikes + 1 });
    }
  }
  async _onClickSendComment() {
    console.log("send comment clickewd");
    var userData = JSON.parse(localStorage.getItem(authResponseStoredValue));
    var postJson = {
      id: this.props.props._id,
      commentData: {
        user: userData.userData,
        comment: this.state.comment,
      },
    };

    var response = await createCommentForPost(postJson);

    if (response.status === 200) {
      console.log("comment added successfully");

      var data = this.state.commentsArray;
      data.push({
        user: userData.userData,
        comment: this.state.comment,
      });
      this.setState({ commentsArray: data });
      this.setState({ comment:""})
    }
  }
  render() {
    var userDetails = JSON.parse(localStorage.getItem(authResponseStoredValue));
    console.log("Inside video post", this.props.props);
    return (
      <>
        <div
          style={{
            textAlign: "left",
            padding: "10px",
          }}
        >
          <div className="d-flex flex-row">
            <div className="comment_icon_top">
              <img
                src={this.props.props.user.userImage}
                height="50px"
                width="50px"
                style={{ borderRadius: "25px" }}
              ></img>
            </div>
            <div className="ms-3">
              <h6 className="fw-bold mb-0">{this.props.props.user.name}</h6>
              <p style={{ fontSize: "15px" }}>
                {this.dateFromObjectId(this.props.props._id)}
              </p>
            </div>
            <div className="post_action ms-auto">
              <Dropdown>
                <Dropdown.Toggle id="" className="action_dd">
                  <img
                    src={more}
                    style={{ height: "2em", width: "2em" }}
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <p onClick={() => this._onClickDeletePost(this.props.props)}> Delete </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="dropdown">
                <div className="dots_icon"></div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      <p
                        onClick={() =>
                          this._onClickDeletePost(this.props.props)
                        }
                        style={{ fontSize: "18px", cursor: "pointer" }}
                      >
                        Delete
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p style={{ marginLeft: "70px", marginRight: "10px" }}>{this.props.props.title}</p>
          <div
            className="image-field-for-posts"
            onClick={() => {
              // this.props.handelNewsClick();
              // this.props.setNewsItem(this.props.props);
            }}
          >
            <ReactPlayer
              controls={true}
              pip
              width="100%"
              height="25em"
              playIcon="false"
              url={this.state.videoUrl}
              style={{ marginLeft: "70px",marginRight: "10px" , borderRadius: "2em" }}
            ></ReactPlayer>
          </div>
          <div className="d-flex " style={{marginTop: "1.5rem", marginLeft: "70px" }} >

            <div className="act_sec pr">
              <img onClick={() => { this._onClickLike(this.props.props._id); }} src={like} className="action_icons"/>
              <p className="act_count">{this.state.likes}</p>
            </div>
            <div className="act_sec  pr" style={{marginLeft: "1.5em"}}>
              <img
                onClick={() => {
                  this._onClickDislike(this.props.props._id);
                }}
                src={dislike}
                className="action_icons"
              />
              <p className="act_count">{this.state.dislikes}</p>
            </div>

            <div className="act_sec pr ms-5" onClick={() => this.setState({isCommentVisible: !this.state.isCommentVisible,})}>
              <img src={comment} className="action_icons"/>
              <p className="act_count"></p>
            </div>
            <div className="act_sec pr ms-5">
              <img src={share} className="action_icons"/>
            </div>
          </div>

          <div style={{marginLeft:"5em",marginTop:"1em"}}>
            {this.state.isCommentVisible === true ? (
              <>
                <div style={{ display: "flex" }}>
                  <div
                    style={{ width: "80%" }}
                    className="div-box-input-share-thoughts"
                  >
                    <input
                      onChange={(e) => {
                        this.setState({ comment: e.target.value });
                      }}
                      className="input-post"
                      placeholder="Share / Ask what's on your mind?"
                    ></input>
                  </div>
                  <div
                    onClick={() => {
                      this._onClickSendComment();
                    }}
                    style={{ cursor: "pointer",backgroundColor:"#39a1d9",textAlign: "center",fontSize: "25px",color: "white"}}
                  >
                    Send
                  </div>
                </div>

                {this.state.commentsArray.map((item, id) => {
                  return (
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "15",
                        display: "flex",
                        padding: "0.5em",
                      }}
                    >
                      <img
                        src={item.user.userImage}
                        style={{ height: "25px", width: "25px" }}
                      ></img>
                      <p>{item.comment}</p>
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </>
    );
  }

  async componentDidMount() {
    if (
      this.props.props.videoLink !== null &&
      this.props.props.videoLink !== undefined
    ) {
      this.setState({
        videoUrl: this.props.props.videoLink,
      });
    } else {
      var response = await getFileContentById(this.state.fileId);
      if (response.status === 200) {
        console.log(response);
        var h1 = response.data.response.file.data;
        const video = new Buffer.from(h1).toString("ascii");
        console.log(video);
        const dataUrl = bufferToDataUrl("video/mp4", video);

        console.log("buffeerUrl", dataUrl);
        this.setState({
          videoUrl: dataUrl,
        });
      }
    }
  }
}
