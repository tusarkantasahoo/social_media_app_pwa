import React, { Component } from "react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import cancel from "../../../assets/images/cancel.png";
import img_thumb from "../../../assets/images/img_thumb.png";
import Tooltip from '@material-ui/core/Tooltip';
import { StyledDropZone } from "react-drop-zone";
import { imageFileUpload, createPostData } from "../../api/Api.js";
import TextField from '@material-ui/core/TextField';
import { Dropdown } from 'react-bootstrap';
export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: props.postText,
      image: "",
      description: props.postText,
      file: null,
      userData: JSON.parse(localStorage.getItem(authResponseStoredValue))
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
  async uploadImage(file) {
    this.setState({ file: file });
    console.log("base64 image");
    const base64Img = await this.convertImageFileToBase64(file);
    console.log("base64 image", base64Img);
    if (base64Img) {
      this.setState({ image: base64Img });
    }
  }

  async requestForUpload() {

    const formData = new FormData();
    formData.append('profileImg', this.state.file)
    console.log("Payload", formData)

    var responseFileUpload = await imageFileUpload(formData);
    if (responseFileUpload.status === 200) {
      console.log("response fater file stor", responseFileUpload)
      console.log("file id", responseFileUpload.data._id)
      var payload = {
        title: this.state.postText,
        description: this.state.description,
        postType: "image",
        user: this.state.userData.userData,
        fileStorageId: responseFileUpload.data._id
      }
      var responseForPostDetails = await createPostData(payload);
      if (responseForPostDetails.status === 200) {
        console.log("post details reposne", responseForPostDetails)
        window.location.reload();
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
          accept="image/*"
          style={{
            height: "auto",
            border: "3px dotted #9e9d9d",
            marginTop: "35px",
            borderRadius: "20px",
            margin: "10px",
            padding: "2rem 1rem",
          }}
          onDrop={(file, text) => {
            console.log(file);
            this.uploadImage(file);
          }}
        >
          {this.state.image.length === 0 ? (
            <>
              <div className="d-flex flex-column jcc aic">
                <img src={img_thumb} style={{ width: "100px" }}></img>
                <p style={{ fontSize: "20px", marginTop: "1rem" }}>
                  Click to Upload or drop your imagesss
                </p>
              </div>
            </>
          ) : (
            <img
              src={this.state.image}
              style={{ height: "20em", width: "100%" }}
            />
          )}
        </StyledDropZone>
 
        <button className="default_btn ms-2" onClick={() => { this.requestForUpload(); }}>
          POST
        </button>
      </>
    );
  }
}
