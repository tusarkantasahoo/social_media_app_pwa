import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import home from "../../../assets/images/phase2Img/home.png"
import history from '../../pages/history/History.js';
import arrowRight from "../../../assets/images/arrowRight.png";
export default class Cardbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

  }


  render() {
    return (
      <div className="crdbx">
        <div className="card p-3 home_card">
          <div className="d-flex jcc aic">
            <img src={this.props.image} style={{ height: "3em", width: "3em" }}></img>
          </div>
          <div className="d-flex jcc aic mt-3">
            <h4>{this.props.name}</h4>
          </div>
          <p style={{ fontSize: "16px" }}>{this.props.desc}</p>
          <div className="d-flex jce">
            <a href="javascript:void(0)" className="btn_theme td_none">Know More</a>
          </div>
        </div>
      </div>
    )
  }
}