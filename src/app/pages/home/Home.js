import React, { Component } from "react";
import HomeOptions from "../../components/homeOptions/HomeOptions.js"
export default class Home extends Component {
  render() {
    console.log("Come t hom")
    return (
     
        <div className="row">
          <div className="col-3" id="home-options" style={{border:"0.5px solid black"}}>
          <HomeOptions />
          </div>
          <div className="col-9" id="home-social">

          </div>
        </div>
     
    );
  }
}
