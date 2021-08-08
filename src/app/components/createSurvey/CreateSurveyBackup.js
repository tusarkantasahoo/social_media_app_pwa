import React, { Component } from "react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import cancel from "../../../assets/images/cancel.png";
import { StyledDropZone } from "react-drop-zone";
import oneQuestionImg from "../../../assets/images/clipboard.png";
import classicSurvey from "../../../assets/images/classicSurvey.png";
import conversationSurvey from "../../../assets/images/conversationSurvey.png";
import check from "../../../assets/images/check.png";

export default class CreateSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: props.postText,
      description: "",
      surveyFormat: "oneQuestion",
      isCreateSurveyClicked: false,
      noOfOptions: 2,
    };
    this._selectSurveyFormat = this._selectSurveyFormat.bind(this);
  }

  _selectSurveyFormat(incomingFormat) {
    this.setState({ surveyFormat: incomingFormat });
  }

  render() {
    var userDetails = JSON.parse(localStorage.getItem(authResponseStoredValue));
    return (
      <>
        <div></div>
        <div className="row">
          <div
            className="col-11"
            style={{ textAlign: "center", marginTop: "10" }}
          >
            <p style={{ fontSize: "25px" }}>Create Your Survey</p>
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

        {this.state.isCreateSurveyClicked !== true ? (
          <>
            <div style={{ width: "90%", marginLeft: "5%" }}>
              <input
                value={this.state.postText}
                onChange={(e) => {
                  this.setState({ postText: e.target.value });
                }}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  height: "3em",
                  border: "0.5px solid #1da1f2",
                  outline: "0",
                }}
                placeholder="Survey Name"
              ></input>
            </div>
            <div style={{ width: "100%", marginTop: "15px" }}>
              <select
                value="Survey Category"
                style={{
                  height: "3em",
                  width: "90%",
                  borderRadius: "10px",
                  border: "0.5px solid #1da1f2",
                }}
              >
                <option value="cat1">Category 1</option>
                <option value="cat2">Category 2</option>
                <option value="cat3">Category 3</option>
              </select>
            </div>
            <div className="row" style={{ marginTop: "15px" }}>
              <div className="col-1" style={{ textAlign: "right" }}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  style={{
                    height: "22px",
                    width: "22px",
                    marginRight: "-0.5em",
                  }}
                ></input>
              </div>
              <div className="col-11" style={{ textAlign: "left" }}>
                <p style={{ fontSize: "15px" }}>
                  My Question is already written
                </p>
              </div>
            </div>
            <hr style={{ height: "2px", borderWid: "0.5px" }}></hr>
            <div style={{ textAlign: "left" }}>
              <p style={{ marginLeft: "2em", fontWeight: "500" }}>
                Choose How to collect response
              </p>
            </div>
            <div className="row" style={{ marginLeft: "2em" }}>
              <div
                className="col-6"
                style={{ textAlign: "left", display: "inline-flex" }}
              >
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  style={{ height: "22px", width: "22px" }}
                ></input>
                <p style={{ marginLeft: "1em" }}>Buy targetted responses</p>
              </div>
              <div
                className="col-6"
                style={{ textAlign: "left", display: "inline-flex" }}
              >
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  style={{ height: "22px", width: "22px" }}
                ></input>
                <p>Use My Own contacts</p>
              </div>
            </div>
            <hr style={{ height: "2px", borderWid: "0.5px" }}></hr>

            <p
              style={{
                textAlign: "left",
                marginLeft: "2em",
                fontWeight: "500",
              }}
            >
              Choose a survey format
            </p>

            <div className="row">
              <div
                className="col-4"
                onClick={() => this._selectSurveyFormat("oneQuestion")}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    width: "80%",
                    height: "15em",
                    border:
                      this.state.surveyFormat === "oneQuestion"
                        ? "2px solid #1da1f2"
                        : "0.5px solid black",
                    marginLeft: "10%",
                  }}
                >
                  <div style={{ textAlign: "right", height: "3em" }}>
                    {this.state.surveyFormat === "oneQuestion" ? (
                      <img
                        src={check}
                        style={{ width: "3em", height: "3em", padding: "5px" }}
                      ></img>
                    ) : null}
                  </div>
                  <div
                    className="for_Img"
                    style={{ height: "35%", textAlign: "left" }}
                  >
                    <img
                      src={oneQuestionImg}
                      style={{ height: "4em", width: "4em", marginLeft: "10%" }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", marginLeft: "10%" }}>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        textAlign: "left",
                      }}
                    >
                      One Question at a time
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        textAlign: "left",
                      }}
                    >
                      Automatically Scrolls to next question
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-4"
                onClick={() => this._selectSurveyFormat("classicSurvey")}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    width: "80%",
                    height: "15em",
                    border:
                      this.state.surveyFormat === "classicSurvey"
                        ? "2px solid #1da1f2"
                        : "0.5px solid black",
                    marginLeft: "10%",
                  }}
                >
                  <div style={{ textAlign: "right", height: "3em" }}>
                    {this.state.surveyFormat === "classicSurvey" ? (
                      <img
                        src={check}
                        style={{ width: "3em", height: "3em", padding: "5px" }}
                      ></img>
                    ) : null}
                  </div>
                  <div
                    className="for_Img"
                    style={{ height: "35%", textAlign: "left" }}
                  >
                    <img
                      src={classicSurvey}
                      style={{ height: "4em", width: "4em", marginLeft: "10%" }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", marginLeft: "10%" }}>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        textAlign: "left",
                      }}
                    >
                      Classic
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        textAlign: "left",
                      }}
                    >
                      Show all questions on a page at once
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-4"
                onClick={() => this._selectSurveyFormat("conversationSurvey")}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    width: "80%",
                    height: "15em",
                    border:
                      this.state.surveyFormat === "conversationSurvey"
                        ? "2px solid #1da1f2"
                        : "0.5px solid black",
                    marginLeft: "10%",
                  }}
                >
                  <div style={{ textAlign: "right", height: "3em" }}>
                    {this.state.surveyFormat === "conversationSurvey" ? (
                      <img
                        src={check}
                        style={{ width: "3em", height: "3em", padding: "5px" }}
                      ></img>
                    ) : null}
                  </div>
                  <div
                    className="for_Img"
                    style={{ height: "35%", textAlign: "left" }}
                  >
                    <img
                      src={conversationSurvey}
                      style={{ height: "4em", width: "4em", marginLeft: "10%" }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", marginLeft: "10%" }}>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        textAlign: "left",
                      }}
                    >
                      Conversation
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        textAlign: "left",
                      }}
                    >
                      Turn your survey into a chat conversation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div style={{ textAlign: "right", marginTop: "1em" }}>
              <button
                style={{
                  height: "50px",
                  width: "30%",
                  marginBottom: "50px",
                  marginTop: "20px",
                  backgroundColor: "#1da1f2",
                  // fontWeight: "bold",
                  // borderRadius: "10px",
                  color: "white",
                  marginRight: "2em",
                }}
                onClick={() => this.setState({isCreateSurveyClicked:!this.state.isCreateSurveyClicked})}
              >
                CREATE SURVEY
              </button>
            </div>
          </>
        ) : (
          <>
        
            <div style={{ width: "90%", marginLeft: "5%" }}>
              <input
                value={this.state.postText}
                onChange={(e) => {
                  this.setState({ postText: e.target.value });
                }}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  height: "3em",
                  border: "0.5px solid #1da1f2",
                  outline: "0",
                }}
                placeholder="Survey Name"
              ></input>
            </div>
            <div
              style={{
                width: "90%",
                marginLeft: "5%",
                marginTop: "10px",
                textAlign: "left",
                padding: "10px",
                borderWidth: "thin",
                border: "0.5px solid #bab3a0",
                borderRadius: "10px",
              }}
            >
              <p>Options for Polls</p>
              <input
                style={{
                  width: "80%",
                  height: "3em",
                  border: "0.5px solid ",
                  outline: "0",
                }}
                placeholder="Choice 1"
              ></input>
              <input
                style={{
                  width: "80%",
                  height: "3em",
                  border: "0.5px solid ",
                  outline: "0",
                  marginTop: "1em",
                }}
                placeholder="Choice 2"
              ></input>
              {this.state.noOfOptions > 2 ? (
                <>
                  {this.state.noOfOptions === 3 ? (
                    <input
                      style={{
                        width: "80%",
                        height: "3em",
                        border: "0.5px solid ",
                        outline: "0",
                        marginTop: "1em",
                      }}
                      placeholder="Choice 3"
                    ></input>
                  ) : (
                    <>
                      <input
                        style={{
                          width: "80%",
                          height: "3em",
                          border: "0.5px solid ",
                          outline: "0",
                          marginTop: "1em",
                        }}
                        placeholder="Choice 3"
                      ></input>
                      <input
                        style={{
                          width: "80%",
                          height: "3em",
                          border: "0.5px solid ",
                          outline: "0",
                          marginTop: "1em",
                        }}
                        placeholder="Choice 4"
                      ></input>
                    </>
                  )}
                </>
              ) : null}
              {this.state.noOfOptions <4?(
                <p
                style={{
                  fontSize: "22px",
                  marginTop: "1em",
                  cursor: "pointer",
                  color:"#1da1f2"
                }}
                onClick={() =>
                  this.setState({ noOfOptions: this.state.noOfOptions + 1 })
                }
              >
                Add more +
              </p>
              ):(null)}
            </div>
            <div style={{ marginTop: "1em" }}>
              <button style={{border: "1px solid",backgroundColor:"#1da1f2",fontSize: "18px",color:"white",width:"50%"}}>Post Survey</button>
            </div>
            <br></br>
          </>
        )}
      </>
    );
  }
}
