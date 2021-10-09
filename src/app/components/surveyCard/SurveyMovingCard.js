import React, { Component } from "react";
import history from "../../pages/history/History.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PollCard from "./PollCard.js";
import QuizCard from "./QuizCard.js";
import ResearchCard from "./ResearchCard.js";
export default class SurveyMovingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSurveyByType = this.getSurveyByType.bind(this);
  }

  getSurveyByType(item){
    if(item==="poll"){
      return <PollCard item={this.props.item} />
    }
    if(item==="quiz"){
      return <QuizCard item={this.props.item} />
    }

    if(item==="research"){
      return <ResearchCard item={this.props.item} />
    }


  }

  render() {
    return (
      <>
      {this.getSurveyByType(this.props.item.surveyType)}
      </>
    );
  }
}
