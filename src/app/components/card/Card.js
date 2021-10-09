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
        <div      
        style={{
          marginLeft:"0.5em",
          height: "12em",
          width: "23em",
          cursor: "pointer",
          marginTop: "1em",
          backgroundColor: "#f7f7f9",
          boxShadow: "2px 10px 10px  #dbd8d7",
          borderRadius: "0.2em",
          padding:"0.5em",
          marginRight:"0.5em",
        }}
      >
        
        <p style={{fontSize:"25px",fontWeight: "bold" }}>{this.props.name}<img src={arrowRight} style={{width:"1em",height:"1em",marginLeft:"0.5em"}}></img></p>

        <img
          src={this.props.image}
          style={{ height: "3em", width: "3em" }}
        ></img>
        <p style={{fontSize:"18px",fontWeight: "500"}}>{this.props.desc}</p>
        <br></br>
      </div>  
    )}
}