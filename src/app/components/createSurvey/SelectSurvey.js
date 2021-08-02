import React, { Component } from "react";
import cancel from "../../../assets/images/cancel.png";
export default class SelectSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        width: 0, height: 0,
        surveyType:"poll",
        postText:props.postText,
    };
  }


  render() {
    return (
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
                value={this.state.surveyType}
                style={{
                  height: "3em",
                  width: "90%",
                  borderRadius: "10px",
                  border: "0.5px solid #1da1f2",
                }}
                onChange={(e)=>{
                console.log(e.target.value)
                 this.setState({surveyType : e.target.value})
                }}
              >
                <option value="poll" style={{fontSize:"18px"}} >POLL</option>
                <option value="quiz" style={{fontSize:"18px"}}>QUIZ</option>
                <option value="research" style={{fontSize:"18px"}}>RESEARCH</option>
              </select>
            </div>
            <div style={{ textAlign: "right", marginTop: "4em" }}>
              <button
                style={{
                  height: "50px",
                  width: "30%",
                  marginBottom: "50px",
                  marginTop: "20px",
                  backgroundColor: "#1da1f2",
                  color: "white",
                  marginRight: "2em",
                }}
                onClick={() =>this.props._isCreateSurveyClicked(this.state.surveyType)
                }
              >
                CREATE SURVEY
              </button>
            </div>
    </>  

    )
}
}      