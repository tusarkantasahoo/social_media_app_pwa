import React, { Component } from "react";
import history from "../../pages/history/History.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';
export default class SurveyMovingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSurveyType = this.getSurveyType.bind(this);
  }

  getSurveyType(item) {
    if (item === "poll") {
      return "Poll"
    }
    if (item === "quiz") {
      return "Quiz"
    }

    if (item === "research") {
      return "Research"
    }


  }

  render() {
    return (
      <>
        <div className="surveyCard shadow-lg">
          <div className="surveyHeader">
            <p style={{ fontSize: "18px", fontWeight: "600" }}>{this.getSurveyType(this.props.item.surveyType)}</p>
          </div>

          <div className="surveyCardBody">
            <p style={{ fontSize: "18px", fontWeight: "600" }}>{this.props.item.title} </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="d-flex jcsb aic">
              <Link to={"/survey/" + this.props.item._id} className="linkC">
                <div className="survey_btn">
                  <Button variant="contained" className="">Answer</Button>
                </div>
              </Link>
              <p className="survey_response">
                Total Response:100
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
