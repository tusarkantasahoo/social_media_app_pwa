import React, { Component } from "react";
import userImage from "../../../assets/images/professionalImage.png";
import "./Post.css";
import ReactPlayer from "react-player";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import { getFileContentById, deletePostById, addLikeForPost, createCommentForPost, addDislikeForPost, getResponseLikedOrDisliked } from "../../api/Api.js";
import bufferToDataUrl from "buffer-to-data-url";
import send from "../../../assets/images/send.png";
import like from "../../../assets/images/svg/upVote.png";
import likeBlue from "../../../assets/images/svg/upVoteBlue.png";
import dislike from "../../../assets/images/svg/downVote.png";
import dislikeBlue from "../../../assets/images/svg/downVoteBlue.png";
import share from "../../../assets/images/svg/share.png";
import more from "../../../assets/images/svg/more.png";
// import share from "../../../assets/images/network.png";
import Tooltip from "@material-ui/core/Tooltip";
import { Dropdown } from "react-bootstrap";
import comment from "../../../assets/images/comment.png";
import MaterialIcon, { colorPalette } from "material-icons-react";
import history from "../../pages/history/History.js";
import Button from "@material-ui/core/Button";
import userCurrent from "../../../assets/images/girl.jpg";

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
      commentsArray: this.props.props.comments,
      postliked: null
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

    var dateNew = dt.toString();
    var data = dateNew.split(" ");
    var data1 = data[0] + " " + data[1] + " " + data[2] + " " + data[3] + " at " + data[4]

    return data1;
  }
  async _onClickLike(postId) {
    var userData = JSON.parse(localStorage.getItem(authResponseStoredValue));
    var postJson = {
      id: postId,
      userId: userData.userData._id,
      data: "like"
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
      userId: userData.userData._id,
      data: "dislike"
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
      this.setState({ comment: "" })
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

            {userDetails !== null &&
              userDetails !== undefined &&
              userDetails.userData !== null &&
              userDetails.userData !== undefined &&
              userDetails.userData._id !== null &&
              userDetails.userData._id !== undefined &&
              userDetails.userData._id === this.props.props.user._id ? (
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
            ) : null}

          </div>
          <p style={{ marginLeft: "70px", marginRight: "10px" }}>{this.props.props.title}</p>
          <div
            className="image-field-for-posts"
            onClick={() => {
              history.push("/rooms/" + this.props.props._id);
              window.location.reload();
            }}
          >
            <ReactPlayer
              controls={true}
              pip
              width="100%"
              height="25em"
              playIcon="false"
              url={this.state.videoUrl}
              style={{borderRadius: "5px" }}
            ></ReactPlayer>
          </div>
          <div className="postActionSec">
          <div className="d-flex jcsb" style={{width:"90%",marginLeft:"5%"}}>

            <div className="d-flex " >
              <div className="act_sec d-flex aic pr">
                {this.state.postliked === true ? (
                  <><img
                    onClick={() => {
                      if (this.state.postliked === null && userDetails !== null && userDetails !== undefined) {
                        this._onClickLike(this.props.props._id);
                        this.setState({ postliked: true })
                      }

                    }}
                    src={likeBlue}
                    className="action_icons"
                  />
                    <p className="act_count">{this.state.likes}</p>
                  </>
                ) : (
                  <>
                    <img
                      onClick={() => {
                        if (this.state.postliked === null && userDetails !== null && userDetails !== undefined) {
                          this._onClickLike(this.props.props._id);
                          this.setState({ postliked: true })
                        }

                      }}
                      src={like}
                      className="action_icons"
                    />
                    <p className="act_count text-secondary">{this.state.likes}</p>
                  </>
                )}
              </div>
              <div className="act_sec d-flex aic pr ms-3" style={{ marginLeft: "1.5em" }}>
                {this.state.postliked === false ? (
                  <>
                    <img
                      onClick={() => {
                        if (this.state.postliked === null && userDetails !== null && userDetails !== undefined) {
                          this._onClickDislike(this.props.props._id);
                          this.setState({ postliked: false })
                        }

                      }}
                      src={dislikeBlue}
                      className="action_icons"
                    />
                    <p className="act_count text-secondary">{this.state.dislikes}</p>
                  </>
                ) : (
                  <>        <img
                    onClick={() => {
                      if (this.state.postliked === null && userDetails !== null && userDetails !== undefined) {
                        this._onClickDislike(this.props.props._id);
                        this.setState({ postliked: false })
                      }

                    }}
                    src={dislike}
                    className="action_icons"
                  />
                    <p className="act_count text-secondary">{this.state.dislikes}</p>
                  </>
                )}
              </div>
            </div>

            <div className="act_sec d-flex aic pr ms-5" onClick={() => this.setState({ isCommentVisible: !this.state.isCommentVisible, })}>
              <img src={comment} className="action_icons" />
              <p className="act_count text-secondary"><span className="me-1">{this.props.props.comments.length}</span>Response</p>
            </div>
            <div className="act_sec d-flex aic pr ms-5" style={{marginLeft:"-2em"}} >
              <img src={share} className="action_icons" />
            </div>
          </div>
          </div>

          <div style={{ marginLeft: "", marginTop: "1em" }}>
            {this.state.isCommentVisible === true ? (
              <>
                <div className="d-flex aic mb-3">
                  <img src={userCurrent} className="user_crunt_pic"></img>

                  <div className="div-box-input-share-thoughts">
                    <input onChange={(e) => { this.setState({ comment: e.target.value }); }} className="input-post" placeholder="Share / Ask what's on your mind?"></input>
                  </div>
                  <Button onClick={() => { this._onClickSendComment(); }} variant="contained" className="btn_theme ms-3 hfc">Send</Button>
                </div>

                {this.props.props.comments.map((item, id) => {
                  return (
                    <div className="fs-6 d-flex p-2 ms-3">
                      <img src={item.user.userImage} className="user_cmnt_pic"></img>
                      <div className="ms-3">
                        <h6 className="fw-bold mb-0">Manish</h6>
                        <p className="text-secondary mb-0">Sat Oct 30 2021 at 23:50</p>
                        <p className="">{item.comment}</p>
                      </div>
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
    var userDetails = JSON.parse(localStorage.getItem(authResponseStoredValue));
    if (userDetails !== null && userDetails !== undefined) {
      var likeBody = {
        postId: this.props.props._id,
        userId: userDetails.userData._id
      }
      var responseLikeDislike = await getResponseLikedOrDisliked(likeBody);
      if (responseLikeDislike.status === 200) {
        console.log("Response Like dis", responseLikeDislike)
        if (responseLikeDislike.data.userResponse === "like") {
          this.setState({ postliked: true })
        }
        else if (responseLikeDislike.data.userResponse === "dislike") {
          this.setState({ postliked: false })
        }
        else {
          this.setState({ postliked: null })
        }
      }
    }
  }
}
