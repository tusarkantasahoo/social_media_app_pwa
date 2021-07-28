import React, { Component } from "react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import cancel from "../../../assets/images/cancel.png";
import { StyledDropZone } from "react-drop-zone";

export default class CreateSurvey extends Component {
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
          <div className="col-2" style={{ textAlign: "center" ,marginTop:"10" }}>
         <p style={{fontSize:"22px"}}>Survey Title</p>
          </div>
          <div className="col-9" id="field-for-text-thoughts" >
            <div className="div-box-input-share-thoughts" >
              <input
                value={this.state.postText}
                onChange={(e) => {
                  this.setState({ postText: e.target.value });
                }}
              style={{width:"100%",outline:"0" ,border: "0.5px solid blue",borderRadius:"10px",height:"3em"}}
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

        <div style={{cursor: "pointer"}}>
            Add Element
        </div>

        <button style={{height:"50px",width:"80%",marginBottom:"50px",marginTop:"20px",backgroundColor:"#1da1f2",fontWeight:"bold",borderRadius:"10px",color:"white"}}>
              POST
        </button>
      </>
    );
  }
}
