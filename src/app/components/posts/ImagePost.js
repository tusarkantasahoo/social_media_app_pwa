import React, { Component } from "react";
import userImage from "../../../assets/images/professionalImage.png";
import "./Post.css";
import like from "../../../assets/images/svg/like.png";
import dislike from "../../../assets/images/svg/dislike.png";
import share from "../../../assets/images/svg/share.png";
import more from "../../../assets/images/svg/more.png";
// import share from "../../../assets/images/network.png";
import Tooltip from "@material-ui/core/Tooltip";
import { Dropdown } from "react-bootstrap";
import comment from "../../../assets/images/comment.png";
import MaterialIcon, { colorPalette } from "material-icons-react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import {
  getFileContentById,
  deletePostById,
  createCommentForPost,
  addLikeForPost,
} from "../../api/Api.js";
import bufferToDataUrl from "buffer-to-data-url";
import send from "../../../assets/images/send.png";

export default class ImagePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileId: this.props.props.fileStorageId,
      postImage: "",
      comment: "",
      isCommentVisible: false,
      likes:this.props.props.likes
    };

    this._onClickDeletePost = this._onClickDeletePost.bind(this);
    this._onClickSendComment = this._onClickSendComment.bind(this);
    this.dateFromObjectId = this.dateFromObjectId.bind(this);
    this._onClickLike = this._onClickLike.bind(this);
  }

  async _onClickDeletePost(item) {
    var response = await deletePostById(item);
    if (response.status === 200) {
      console.log("Post delete", response);
      window.location.reload();
    }
  }

  async _onClickSendComment() {
    console.log("send comment clickewd");
    var userData = JSON.parse(localStorage.getItem(authResponseStoredValue));
    var postJson = {
      id: this.props.props._id,
      commentData: {
        userId: userData.id,
        comment: this.state.comment,
      },
    };

    var response = await createCommentForPost(postJson);

    if (response.status === 200) {
      console.log("comment added successfully");
    }
  }
  async _onClickLike(postId) {
    var userData = JSON.parse(localStorage.getItem(authResponseStoredValue));
    var postJson = {
      id: postId,
      userId: userData.id
    };
    var response = await addLikeForPost(postJson);
    if (response.status === 200) {
      console.log("Liked");
      this.setState({likes:this.state.likes+1})
    }
  }

  dateFromObjectId(objectId) {
    console.log("ONN id", objectId);
    var dt = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    return dt.toString();
  }

  render() {
    var userDetails = JSON.parse(localStorage.getItem(authResponseStoredValue));
    console.log("Incoming props", this.props.props);
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
                {/* {this.props.props.user.email} */}
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
                    <p
                      onClick={() => this._onClickDeletePost(this.props.props)}
                    >
                      Delete
                    </p>
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
          <p>{this.props.props.title}</p>
          <div
            className="image-field-for-posts"
            onClick={() => {
              this.props.handelNewsClick();
              this.props.setNewsItem(this.props.props);
            }}
          >
            <img
              className="mx_height_100 w-100"
              src={this.state.postImage}
            ></img>
          </div>
          <div className="d-flex flex-row aic jcsb mx-3 my-4 px-4">
            <div className="d-flex aic">
              <div class="text-center pr">
                <p class="liked ">{this.state.likes}</p>
                <img
                  onClick={() => {
                    this._onClickLike(this.props.props._id);
                  }}
                  src={like}
                  className="action_icons me-3"
                />
              </div>
              {/* <div class="text-center pr">
                <img src={dislike} className="action_icons ms-3" />
                <p class="disliked">10k</p>
              </div> */}
            </div>
            <div
              onClick={() =>
                this.setState({
                  isCommentVisible: !this.state.isCommentVisible,
                })
              }
            >
              <img src={comment} className="action_icons"></img>
            </div>
            <div>
              <img src={share} className="action_icons"></img>
            </div>
          </div>

          {/* <div className="d-flex nowrap aic">
            <div className="w_fc">
              {this.props.isLoggedIn ? (
                <img src={userDetails.userData.userImage} className="comment_image" />
              ) :
                (
                  <img src={userImage} className="comment_image" />
                )}
            </div>
            <div className="col px-2">
              <input
                value={this.state.comment}
                onChange={(e) => { this.setState({comment:e.target.value})}}
                placeholder="Comment"
                className="commentBox w-100"
              ></input>
            </div>
            <div onClick={()=>{this._onClickSendComment()}} className="w_fc" style={{ textAlign: "left", cursor: "pointer" }}>
              <img src={send} style={{ height: "35px", width: "2.5em" }}>
              </img>
            </div>
          </div>
          <div>
            {this.props.props.comments.map((item,id)=>{ 
              return (
                <p>{item.comment}</p>
              )
            })}

          </div> */}
        </div>
      </>
    );
  }
  async componentDidMount() {
    var responseFileContent = await getFileContentById(this.state.fileId);
    if (responseFileContent.status === 200) {
      //  console.log("File content",responseFileContent.data.response.file.data)

      var h1 = responseFileContent.data.response.file.data;
      const img = new Buffer.from(h1).toString("ascii");
      console.log(img);
      const dataUrl = bufferToDataUrl("image/png", img);

      // console.log("buffeerUrl",dataUrl)
      this.setState({
        postImage: dataUrl,
      });
    }
  }
}
