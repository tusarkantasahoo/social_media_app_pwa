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
export default class PostMessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldViewExpand: false,
    };
  }

  render() {
    var dropDownPostOptions = [
      { image: gallary, name: "Image",isPrimary:true },
      { image: clip, name: "video",isPrimary:true },
      { image: checklist, name: "Documents",isPrimary:true },
      { image: askImage, name: "Ask A Question",isPrimary:true },
      { image: imageJobs, name: "Post Jobs" },
      { image: imageSurvey, name: "Create Survey" },
      { image: imageDebate, name: "Create Debate" },
      { image: imageRecomend, name: "Recomendations" },
    ];

    return (
      <>
        <div
          className="message-container"
          style={{
            boxShadow: "4px 10px 8px  #dbd8d7",
            marginTop: "2%",
            borderRadius: "15px",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-1" style={{ textAlign: "left" }}>
                <img className="home-page-user-image-box" src={userImage} />
              </div>
              <div className="col-7" id="field-for-text-thoughts">
                <div className="div-box-input-share-thoughts">
                  <input
                    onChange={(e) => {
                      if (e.target.value.length > 0) {
                        this.setState({ textFieldViewExpand: true });
                      } else {
                        this.setState({ textFieldViewExpand: false });
                      }
                    }}
                    className="input-post"
                    placeholder="Share / Ask what's on your mind?"
                  ></input>
                </div>
              </div>
            </div>

            {this.state.textFieldViewExpand === false ? (
              <div className="row" id="filed-for-image-postbutton">
                <div className="col-1"></div>
                <div className="col-6" id="upload-image-image-field">
                  {dropDownPostOptions.map((item,id)=> {
                    if(item.isPrimary===true){
                      return(<img
                        className="upload-image-before-post"
                        src={item.image}
                      />)
                    }
                  })}
                </div>
                <div className="col-4" id="filed-for-post-button">
                  <button className="post-button" type="submit" value="Submit">
                    {/* <p className="post-text-home">Post</p> */}
                    Post
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="row" style={{ textAlign: "left",marginTop:"40px" }}>
                  <div className="col-10">
                    {dropDownPostOptions.map((item, index) => {
                      return (
                        <div className="post-box-dropdown-list-upload">
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <img
                              className="upload-image-before-post-dropdown"
                              src={item.image}
                            ></img>
                            <p style={{ marginLeft: "10px" }}>{item.name}</p>
                          </div>
                        </div>
                      );
                    })}

                  </div>
                  <div className="col-2">
                  <button
                      className="post-button"
                      type="submit"
                      value="Submit"
                      style={{ position: "relative",bottom: "-22em"}}
                    >
                      <p className="post-text-home">Post</p>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
