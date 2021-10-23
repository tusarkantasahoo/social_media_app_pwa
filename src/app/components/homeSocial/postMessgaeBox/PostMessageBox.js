import React, { Component } from "react";
import userImage from "../../../../assets/images/professionalImage.png";
import clip from "../../../../assets/images/clip.png";
import folderImage from "../../../../assets/images/folder.png";
import gallary from "../../../../assets/images/gallery.png";
import checklist from "../../../../assets/images/checklist.png";
import askImage from "../../../../assets/images/question-mark-inside-a-circle.png";
import imageJobs from "../../../../assets/images/job-post.png";
import imageSurvey from "../../../../assets/images/survey.png";
import imageDebate from "../../../../assets/images/debate.png";
import imageRecomend from "../../../../assets/images/social-media.png";
import "./PostMessageBox.css";
import { authResponseStoredValue } from "../../../../utils/Constant.js";
import ImageUpload from "../../imageUploader/ImageUpload.js";
import VideoUpload from "../../videoUploader/VideoUpload.js";
import CreateSurvey from "../../createSurvey/CreateSurvey.js";
import { createPostData } from "../../../api/Api.js";
import history from "../../../pages/history/History.js";
export default class PostMessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderWhatToPost: "none",
      postText: "",
      userData: JSON.parse(localStorage.getItem(authResponseStoredValue)),
      isTextFieldClicked: false,
    };
    this.renderCreatePostViews = this.renderCreatePostViews.bind(this);
    this.resetPostToDefault = this.resetPostToDefault.bind(this);
    this.createSimpleTextPost = this.createSimpleTextPost.bind(this);
  }

  renderCreatePostViews() {
    console.log(this.state.renderWhatToPost);
    switch (this.state.renderWhatToPost) {
      case "image":
        return (
          <ImageUpload
            resetPostToDefault={this.resetPostToDefault}
            postText={this.state.postText}
          />
        );

      case "video":
        return (
          <VideoUpload
            resetPostToDefault={this.resetPostToDefault}
            postText={this.state.postText}
          />
        );

      case "survey":
        return (
          <CreateSurvey
            resetPostToDefault={this.resetPostToDefault}
            postText={this.state.postText}
          />
        );

      default:
        return null;
    }
  }
  resetPostToDefault() {
    this.setState({ renderWhatToPost: "none" });
  }
  async createSimpleTextPost() {
    var payload = {
      title: this.state.postText,
      postType: "text",
      user: this.state.userData.userData,
    };
    var createPost = await createPostData(payload);
    if (createPost.status === 200) {
      console.log("Post created successfully", createPost);
      window.location.reload()
    }
  }

  render() {
    var dropDownPostOptions = [
      { image: gallary, name: "Image", code: "image", isPrimary: true },
      { image: clip, name: "video", code: "video", isPrimary: true },
      { image: checklist, name: "Documents", code: "docs", isPrimary: true },
      { image: askImage, name: "Ask A Question", code: "ask", isPrimary: true },
      { image: imageJobs, name: "Post Jobs", code: "jobs", isPrimary: true },
      {
        image: imageSurvey,
        name: "Create Survey",
        code: "survey",
        isPrimary: true,
      },
      { image: imageDebate, name: "Create Debate", code: "debate" },
      { image: imageRecomend, name: "Recomendations", code: "recomendations" },
    ];
    var userDetails = JSON.parse(localStorage.getItem(authResponseStoredValue));

    return (
      <>
        <div className="message-container p-2">
          {this.state.renderWhatToPost === "none" ? (
            <div className="container-fluid post_box">
              <div className="d-flex aic">
                <div className="user_post_img" style={{ textAlign: "left" }}>
                  {this.props.isLoggedIn ? (
                    <img
                      className="home-page-user-image-box"
                      src={userDetails.userData.userImage}
                    />
                  ) : (
                    <img className="home-page-user-image-box" src={userImage} />
                  )}
                </div>
                <div className="col" id="field-for-text-thoughts">
                  <div className="div-box-input-share-thoughts">
                    <input
                      onClick={(e) => {
                        this.setState({isTextFieldClicked:true});
                        console.log("On clicked");
                      }}
                      onChange={(e) => {
                        this.setState({ postText: e.target.value });
                      }}
                      className="input-post"
                      placeholder="Share / Ask what's on your mind?"
                    ></input>
                  </div>
                </div>
              </div>

              {this.state.postText.length === 0&&this.state.isTextFieldClicked===false ? (
                <div className="d-flex aic" id="filed-for-image-postbutton">
                  {/* <div className="col-1"></div> */}
                  <div className="col px-0" id="upload-image-image-field">
                    {dropDownPostOptions.map((item, id) => {
                      if (item.isPrimary === true) {
                        return (
                          <img
                            style={{ cursor: "pointer" }}
                            className="upload-image-before-post"
                            src={item.image}
                          />
                        );
                      }
                    })}
                  </div>
                  <div className="" id="filed-for-post-button">
                    <button
                      className="post-button"
                      type="submit"
                      value="Submit"
                    >
                      {/* <p className="post-text-home">Post</p> */}
                      Post
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className="d-flex aic"
                    style={{ textAlign: "left", marginTop: "40px" }}
                  >
                    <div className="d-flex flex-wrap">
                      {dropDownPostOptions.map((item, index) => {
                        return (
                          <div
                            className="post-box-dropdown-list-upload"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              this.setState({ renderWhatToPost: item.code });
                            }}
                          >
                            <div
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <img
                                className="upload-image-before-post-dropdown"
                                src={item.image}
                              ></img>
                              <p style={{ marginLeft: "10px",fontWeight: "550"}}>{item.name}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-right">
                      <button
                        className="post-button"
                        type="submit"
                        value="Submit"
                        style={{ position: "relative" }}
                        onClick={() => {
                          this.createSimpleTextPost();
                        }}
                      >
                     Post
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <>{this.renderCreatePostViews()}</>
          )}
        </div>
      </>
    );
  }
}
