import React, { Component } from "react";
import userImage from "../../../../assets/images/professionalImage.png";
import uploadImage from "../../../../assets/images/uploadImageIcon.jpg";
import "./PostMessageBox.css";
export default class PostMessageBox extends Component {
  render() {
    return (
      <>
        <div
          className="message-container"
          style={{boxShadow: "4px 10px 8px  #dbd8d7",marginTop: "2%",borderRadius:"15px"}}
        >
          <div className="container-fluid" style={{height:"200px"}} >
          <div className="row">
            <div className="col-1" style={{textAlign: "left"}}>
              <img
              className="home-page-user-image-box"
                src={userImage}
              />
            </div>
            <div className="col-7" id="field-for-text-thoughts">
              <div className="div-box-input-share-thoughts">
                <input
                  className="input-post"
                  placeholder="Share / Ask what's on your mind?"
                ></input>
              </div>
            </div>
          </div>
          <div className="row" id="filed-for-image-postbutton" >
              <div className="col-2"></div>
            <div className="col-6" id="upload-image-image-field">
              <img className="upload-image-before-post" height="30px" width="30px"src={uploadImage} /><img className="upload-image-before-post" src={uploadImage}  /> <img className="upload-image-before-post" src={uploadImage} /> <img className="upload-image-before-post" src={uploadImage} />
            </div>
            <div className="col-4" id="filed-for-post-button">
              <button className="post-button" type="submit" value="Submit">
                <p className="post-text-home">Post</p>
              </button>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}
