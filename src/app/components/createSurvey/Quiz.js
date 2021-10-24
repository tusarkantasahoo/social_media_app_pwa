import React, { Component } from "react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import { createSurvey } from "../../api/Api.js";
import QuizSmallComponent from "./QuizSmallComponent.js";
import history from "../../pages/history/History.js";
export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: props.postText,
      user: JSON.parse(localStorage.getItem(authResponseStoredValue)),
      noOfQus: 1,
      questions: [{id:1}],
    };

    this._onClickSurveySubmit = this._onClickSurveySubmit.bind(this);
    this.componentOpern = this.componentOpern.bind(this);
  }

  componentOpern(data){
    this.setState({questions:data})
  }

  async _onClickSurveySubmit() {


    console.log("Question",this.state.questions);
    var postJson = {
      title: this.state.postText,
      user:this.state.user.userData ,
      surveyType:"quiz",
      question: this.state.questions
    }
    var responsePollSurvey = await createSurvey(postJson);
    if (responsePollSurvey.status === 200) {
      console.log("response create survey", responsePollSurvey);
      history.push("/survey")
      window.location.reload();
    }
  }

  render() {
    console.log("Quix created");
    return (
      <>
        Quiz Survey
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
        {this.state.questions.map((item, id) => {
          return (
            <QuizSmallComponent componentOpern={this.componentOpern} questions={this.state.questions} id={id} />
          );
        })}
        <div></div>
        <div
          onClick={() => {
            var dummy = this.state.questions;
            dummy.push({id: this.state.noOfQus+1});
            this.setState({ questions: dummy,noOfQus: this.state.noOfQus+1});
          }}
          style={{
            height: "2em",
            marginTop: "1em",
            backgroundColor: "#dbdbdb",
            cursor: "pointer",
            fontSize: "18px"
          }}
        >
          Add Another +
        </div>
        <div style={{ marginTop: "1em" }}>
          <button
            style={{
              border: "1px solid",
              backgroundColor: "#1da1f2",
              fontSize: "18px",
              color: "white",
              width: "50%",
            }}
            onClick={() => this._onClickSurveySubmit()}
          >
            Post Survey
          </button>
        </div>
      </>
    );
  }
}
