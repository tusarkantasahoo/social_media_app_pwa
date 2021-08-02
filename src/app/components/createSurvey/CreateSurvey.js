import React, { Component } from "react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import cancel from "../../../assets/images/cancel.png";
import { StyledDropZone } from "react-drop-zone";
import oneQuestionImg from "../../../assets/images/clipboard.png";
import classicSurvey from "../../../assets/images/classicSurvey.png";
import conversationSurvey from "../../../assets/images/conversationSurvey.png";
import check from "../../../assets/images/check.png";
import Poll from "./Poll.js";
import SelectSurvey from "./SelectSurvey.js";
import Quiz from "./Quiz.js";
import Research from "./Research.js";
export default class CreateSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: props.postText,
      description: "",
      isCreateSurveyClicked: false,
      noOfOptions: 2,
      pageContentForSurvey:"init"
    };
    this.renderSurveyPages = this.renderSurveyPages.bind(this);
    this._isCreateSurveyClicked = this._isCreateSurveyClicked.bind(this);

  }

  _isCreateSurveyClicked(name){
    this.setState({pageContentForSurvey:name});
  }

  renderSurveyPages(){
    
    switch(this.state.pageContentForSurvey){
      case "init": 
      return <SelectSurvey  _isCreateSurveyClicked={this._isCreateSurveyClicked} state={this.state} postText={this.state.postText} />

      case "poll":
        return <Poll state={this.state} postText={this.state.postText} />

      case "quiz":
        return <Quiz state={this.state} postText={this.state.postText} />

      case "research":
        return <Research state={this.state} postText={this.state.postText} />
  
      default: return null
    }
  }
  


  render() {
    var userDetails = JSON.parse(localStorage.getItem(authResponseStoredValue));
    return (
      <>
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

     

            {this.renderSurveyPages()}
    
      </>
    );
  }
}

