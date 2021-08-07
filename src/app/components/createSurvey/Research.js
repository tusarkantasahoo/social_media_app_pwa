import React, { Component } from "react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import {createSurvey} from "../../api/Api.js";
export default class Research extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        noOfOptions:2, 
        postText:props.postText,
        user:JSON.parse(localStorage.getItem(authResponseStoredValue))

    };
    this._onClickSurveySubmit = this._onClickSurveySubmit.bind(this);
  }

  async _onClickSurveySubmit(){


    var surveyPayload={
      title:this.state.postText,
      surveyType:"research",
      user:this.state.user.userData,
    }

    var responsePollSurvey = await createSurvey(surveyPayload)
    if(responsePollSurvey.status === 200){
      console.log("response create survey",responsePollSurvey)
    }
  }
  render() {
      console.log("Research created");
    return (
      <>
      resr
        <div style={{ width: "90%", marginLeft: "5%" }}>
              <input
                value={this.props.state.postText}
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
      
            <div style={{ marginTop: "1em" }}>
              <button
              onClick={() => this._onClickSurveySubmit()}
                style={{
                  border: "1px solid",
                  backgroundColor: "#1da1f2",
                  fontSize: "18px",
                  color: "white",
                  width: "50%",
                }}
              >
                Post Survey
              </button>
            </div>
      </>
    )}
}   
            
          