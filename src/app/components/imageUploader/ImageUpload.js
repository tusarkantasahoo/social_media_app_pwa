import React, { Component } from "react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import cancel from "../../../assets/images/cancel.png";
import { StyledDropZone } from "react-drop-zone";

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: props.postText,
      image: "",
      description: "",
    };
    this.uploadImage = this.uploadImage.bind(this);
    this.convertImageFileToBase64 = this.convertImageFileToBase64.bind(this);
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
    console.log("base64 image");
    const base64Img = await this.convertImageFileToBase64(file);
    console.log("base64 image", base64Img);
    if (base64Img) {
      this.setState({ image: base64Img });
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
            height: "22em",
            border: "1px solid blue",
            marginTop: "35px",
            borderRadius: "20px",
            margin: "10px",
            borderStyle: "dotted"
          }}
          onDrop={(file, text) => {
            console.log(file);
            this.uploadImage(file);
          }}
        >
          {this.state.image.length === 0 ? (
            <>
              <p style={{ fontSize: "20px", marginTop: "100px" }}>
                Click to Upload or drop your image
              </p>
            </>
          ) : (
            <img
              src={this.state.image}
              style={{ height: "20em", width: "30em" }}
            />
          )}
        </StyledDropZone>
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
              value={this.state.postText}
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
              placeholder="Share / Ask what's on your mind?"
              style={{ width: "90%", height: "50px", marginLeft: "5%" }}
            ></input>
          </div>
        </div>
        <button style={{height:"50px",width:"80%",marginBottom:"50px",marginTop:"20px",backgroundColor:"#1da1f2",fontWeight:"bold",borderRadius:"10px",color:"white"}}>
              POST
        </button>
      </>
    );
  }
}
