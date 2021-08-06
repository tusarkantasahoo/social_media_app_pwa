import React, { Component } from "react";
import ReactPlayer from "react-player";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import cancel from "../../../assets/images/cancel.png";
import { StyledDropZone } from "react-drop-zone";
import {
  imageFileUpload,
  createPostData,
  getFileContentById,
} from "../../api/Api.js";
import bufferToDataUrl from "buffer-to-data-url";
export default class VideoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: props.postText,
      image: "",
      description: props.postText,
      videoUrl: null,
      file: null,
      userData: JSON.parse(localStorage.getItem(authResponseStoredValue)),
    };
    this.uploadImage = this.uploadImage.bind(this);
    this.convertImageFileToBase64 = this.convertImageFileToBase64.bind(this);
    this.requestForUpload = this.requestForUpload.bind(this);
  }

  convertImageFileToBase64(file) {
    console.log("convertImageFileToBase64=======");
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  async  uploadImage(file) {
    console.log("file", file);
    this.setState({ file: file });
    const base64Img = await this.convertImageFileToBase64(file);
    console.log("base64 image", base64Img);
    if (base64Img) {
      this.setState({ image: base64Img });
    }
  }

  async requestForUpload() {
    if (this.state.videoUrl !== null && this.state.videoUrl !== undefined) {
      var payload = {
        title: this.state.postText,
        description: this.state.description,
        postType: "video",
        user: this.state.userData.userData,
        videoLink: this.state.videoUrl,
      };
      var responseForPostDetails = await createPostData(payload);
      if (responseForPostDetails.status === 200) {
        console.log("post details reposne", responseForPostDetails);
      }
    } else {
      const formData = new FormData();
      formData.append("profileImg", this.state.file);
      console.log("Payload", formData);

      var responseFileUpload = await imageFileUpload(formData);
      if (responseFileUpload.status === 200) {
        console.log("response fater file stor", responseFileUpload);
        console.log("file id", responseFileUpload.data._id);
        var payload = {
          title: this.state.postText,
          description: this.state.description,
          postType: "video",
          user: this.state.userData.userData,
          fileStorageId: responseFileUpload.data._id,
        };
        var responseForPostDetails = await createPostData(payload);
        if (responseForPostDetails.status === 200) {
          console.log("post details reposne", responseForPostDetails);
        }
      }
    }
  }

  render() {
    var userDetails = JSON.parse(localStorage.getItem(authResponseStoredValue));
    return (
      <>
        <div className="row">
          <div className="col-1" style={{ textAlign: "left" }}>
            <img
              className="home-page-user-image-box"
              src={userDetails.userData.userImage}
            />
          </div>
          <div className="col-10" id="field-for-text-thoughts">
            <div className="div-box-input-share-thoughts">
              <input
                value={this.state.postText}
                onChange={(e) => {
                  this.setState({ postText: e.target.value });
                }}
                className="input-post"
                placeholder="Share / Ask what's on your mind?"
              ></input>
            </div>
          </div>
          <div
            className="col-1"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <img
              src={cancel}
              style={{
                height: "25px",
                width: "25px",
                marginTop: "1em",
                cursor: "pointer",
              }}
              onClick={() => this.props.resetPostToDefault()}
            ></img>
            <p style={{ fontSize: "25px" }}></p>
          </div>
        </div>
        <StyledDropZone
          accept="video/*"
          style={{
            height: "22em",
            border: "1px solid blue",
            marginTop: "35px",
            borderRadius: "20px",
            margin: "10px",
            borderStyle: "dotted",
          }}
          onDrop={(file, text) => {
            console.log(file);
            this.uploadImage(file);
          }}
        >
          {this.state.file === null || this.state.file === undefined ? (
            <>
              <p style={{ fontSize: "20px", marginTop: "100px" }}>
                Click to Upload or drop your Video
              </p>
            </>
          ) : (
            <ReactPlayer
            controls={true}
            pip
            width="60%"
            height="22em"
            playIcon="false"
            url={this.state.image}
            style={{ marginLeft: "20%" }}
          ></ReactPlayer>
          )}
        </StyledDropZone>
        <div className="row">
          <div className="col-3" style={{ textAlign: "left" }}>
            <p style={{ fontSize: "25px", marginLeft: "20px" }}>
              Or have a link to share
            </p>
          </div>
          <div className="col-9" style={{ textAlign: "left" }}>
            <div style={{}}>
              <input
                onChange={(e) => {
                  this.setState({ videoUrl: e.target.value });
                }}
                placeholder="http://video-link.com"
                style={{
                  width: "90%",
                  height: "50px",
                  marginLeft: "5%",
                  border: "0.5px solid black",
                  outline: "0",
                }}
              ></input>
            </div>
          </div>
        </div>

        <div className="row" style={{ textAlign: "left" }}>
          <p
            style={{ fontSize: "25px", marginTop: "10px", marginLeft: "10px" }}
          >
            Describe your thoughts
          </p>
        </div>
        <div className="row" style={{ textAlign: "left" }}>
          <div style={{ padding: "10px" }}>
            <input
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
              placeholder="Describe something"
              style={{
                width: "90%",
                height: "50px",
                marginLeft: "5%",
                outline: "0",
                border: "0.5px solid black",
              }}
            ></input>
          </div>
        </div>
        <button
          onClick={() => {
            this.requestForUpload();
          }}
          style={{
            height: "50px",
            width: "80%",
            marginBottom: "50px",
            marginTop: "20px",
            backgroundColor: "#1da1f2",
            fontWeight: "bold",
            borderRadius: "10px",
            color: "white",
          }}
        >
          POST
        </button>
        <ReactPlayer
          controls={true}
          pip
          width="60%"
          height="22em"
          playIcon="false"
          url={this.state.videoUrl}
          style={{ marginLeft: "20%" }}
        ></ReactPlayer>
      </>
    );
  }

  async componentDidMount() {
    var response = await getFileContentById("610c05cf5d4d5781dc5ba491");
    if (response.status === 200) {
      console.log(response);
      var h1 = response.data.response.file.data;
      const video = new Buffer.from(h1).toString("ascii");
      console.log(video);
      // const dataUrl = bufferToDataUrl("image/png",img)
      const dataUrl = bufferToDataUrl("video/mp4", video);

      console.log("buffeerUrl", dataUrl);
      this.setState({
        videoUrl: dataUrl,
      });
    }
  }
}
