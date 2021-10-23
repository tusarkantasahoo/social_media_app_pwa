import React, { Component } from "react";

export default class QuizSmallComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }
  render() {
    var id = this.props.id;
    var questions = this.props.questions;
    return (
      <>
        <div style={{ width: "90%", marginLeft: "5%", marginTop: "1em" }}>
          <input
            value={questions[id].quesTit}
            onChange={(e) => {
              questions[id].quesTit=e.target.value
              this.props.componentOpern(questions);
            }}
            style={{
              width: "100%",
              borderRadius: "10px",
              height: "3em",
              border: "0.5px solid #1da1f2",
              outline: "0",
            }}
            placeholder="Question you want to ask"
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
          <p>Options for Quiz</p>
          <input
            style={{
              width: "80%",
              height: "3em",
              border: "0.5px solid ",
              outline: "0",
            }}
            value={questions[id].option1}
            placeholder="Choice 1"
            onChange={(e) => {
              questions[id].option1=e.target.value
              this.props.componentOpern(questions);

            }}
          ></input>
          <input
            style={{
              width: "80%",
              height: "3em",
              border: "0.5px solid ",
              outline: "0",
              marginTop: "1em",
            }}
            value={questions[id].option2}
            onChange={(e) => {
              questions[id].option2=e.target.value
              this.props.componentOpern(questions);
            }}
            placeholder="Choice 2"
          ></input>
          <input
            style={{
              width: "80%",
              height: "3em",
              border: "0.5px solid ",
              outline: "0",
              marginTop: "1em",
            }}
            value={questions[id].option3}
            onChange={(e) => {
              questions[id].option3=e.target.value
              this.props.componentOpern(questions);
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
            value={questions[id].option4}
            onChange={(e) => {
              questions[id].option4=e.target.value
              this.props.componentOpern(questions);
            }}
            placeholder="Choice 4"
          ></input>
        </div>
        <div style={{ textAlign: "left", marginLeft: "3em" }}>
          <p>Correct Option</p>
          <select
            value={questions[id].answer}
            style={{
              height: "3em",
              width: "90%",
              borderRadius: "10px",
              border: "0.5px solid #1da1f2",
            }}
            onChange={(e) => {
              questions[id].answer=e.target.value
              this.props.componentOpern(questions);
            }}
          >
            <option value="option1" style={{ fontSize: "18px" }}>
              Option 1
            </option>
            <option value="option2" style={{ fontSize: "18px" }}>
              Option 2
            </option>
            <option value="option3" style={{ fontSize: "18px" }}>
              Option 3
            </option>
            <option value="option4" style={{ fontSize: "18px" }}>
              Option 4
            </option>
          </select>
        </div>
      </>
    );
  }
}
