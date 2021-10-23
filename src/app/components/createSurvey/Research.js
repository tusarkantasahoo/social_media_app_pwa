import React, { Component } from "react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import { createSurvey } from "../../api/Api.js";
import history from "../../pages/history/History.js";
import TextField from "@material-ui/core/TextField";
export default class Research extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfOptions: 2,
      postText: props.postText,
      user: JSON.parse(localStorage.getItem(authResponseStoredValue)),
      questions:[{}]
    };
    this._onClickSurveySubmit = this._onClickSurveySubmit.bind(this);
    this.smallComponent = this.smallComponent.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.updateQuestionValues = this.updateQuestionValues.bind(this);
  }

  async _onClickSurveySubmit() {
    var surveyPayload = {
      title: this.state.postText,
      surveyType: "research",
      user: this.state.user.userData,
      question:this.state.questions
    };

    var responsePollSurvey = await createSurvey(surveyPayload);
    if (responsePollSurvey.status === 200) {
      console.log("response create survey", responsePollSurvey);
      history.push("/survey");
      window.location.reload();
    }
  }

  addQuestion(){
    var data = this.state.questions;
    data.push({});
    this.setState({questions:data})
  }

  updateQuestionValues(){

  }

  smallComponent(id,questions) {
    return (
      <>
      <div style={{textAlign: "left",marginLeft:"4em",}}>
      <p>Question {id+1}</p>
      </div>
        <div style={{ textAlign: "center" }}>
          <input
            value={questions[id].quesTit}
            onChange={(e) => {
              questions[id].quesid=id+1;
              questions[id].quesTit=e.target.value;
              this.updateQuestionValues( questions);
            }}
            style={{
              width: "80%",
              borderRadius: "10px",
              height: "3em",
              border: "0.5px solid #1da1f2",
              outline: "0",
              // margin:"1em"
            }}
            placeholder="Your Question What You want to Ask"
          ></input>
   
   <TextField style={{width:"80%"}}
              onChange={(e) => {
                questions[id].answer=e.target.value;
              this.updateQuestionValues( questions);
              }}
              id="standard-basic"
              label="Answer"
            />
        </div>
      </>
    );
  }

  render() {
    console.log("Research created");
    return (
      <>
        resr
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
        <div>
          {this.state.questions.map((item,id)=>{
            return(
              <>
                {this.smallComponent(id,this.state.questions)}
              </>
            )
          })}
        </div>
        <div onClick={()=>{this.addQuestion()}}>
          <p style={{fontSize: "18px",marginTop:"1em",cursor: "pointer"}}>Add Question +</p>
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
    );
  }
}
