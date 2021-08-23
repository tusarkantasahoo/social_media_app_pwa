import React, { Component } from "react";
import history from "../../pages/history/History.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
export default class SurveyMovingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSurveyType = this.getSurveyType.bind(this);
  }

  getSurveyType(item){
    if(item==="poll"){
      return "Poll"
    }
    if(item==="quiz"){
      return "Quiz"
    }

    if(item==="research"){
      return "Research"
    }
    
    
  }

  render() {
    return (
      <>
        <div
          style={{ border: "1px solid #1da1f2", height: "15em", width: "15em" }}
        >
          {this.props.item.question}
          <br></br>
          <br></br>
          <p style={{fontSize: "18px",fontWeight: "600"}}>{this.getSurveyType(this.props.item.surveyType)} </p>
          <Link to={"/survey/" + this.props.item._id}>
            <div
              style={{
                backgroundColor: "#1da1f2",
                color: "White",
                marginTop: "5em",
                cursor: "pointer",
              }}
            >
              Give Response
            </div>
          </Link>
          <p style={{ fontSize: "15px", marginTop: "1em" }}>
            Total Response:100
          </p>
        </div>
      </>
    );
  }
}
