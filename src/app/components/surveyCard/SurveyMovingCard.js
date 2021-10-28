import React, { Component } from "react";
import history from "../../pages/history/History.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import PollCard from "./PollCard.js";
import QuizCard from "./QuizCard.js";
import ResearchCard from "./ResearchCard.js";
import {deleteSurveyById} from "../../api/Api.js";
export default class SurveyMovingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSurveyByType = this.getSurveyByType.bind(this);
    this._deleteSurveyById = this._deleteSurveyById.bind(this);
  }

  async _deleteSurveyById(id){
    var payload = {
      surveyId:id
    }

    var response = await deleteSurveyById(payload);
    if(response.status === 200){
      window.location.reload();
    }

  }

  getSurveyByType(item){
    if(item==="poll"){
      return <PollCard _deleteSurveyById={this._deleteSurveyById} item={this.props.item} />
    }
    if(item==="quiz"){
      return <QuizCard item={this.props.item} _deleteSurveyById={this._deleteSurveyById} />
    }

    if(item==="research"){
      return <ResearchCard item={this.props.item} _deleteSurveyById={this._deleteSurveyById} />
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
