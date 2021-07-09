import React, { Component } from "react";
import HeaderSearchBox from "../input/headerSearchBox/HeaderSearchBox.js";
import HeaderUser from "../headerUser/HeaderUser.js";
import "./AppHeader.css";
export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <div
        className="container-fluid"
         style={{ backgroundColor: "#0089ff", height: "50px" }}>
<div className="row">
    <div className="col-3">
      <div className="navThreeLines" >
        <div className="one">
        </div>
        <div className="two">
        </div>
        <div className="three">
        </div>

      </div>
    </div>
    <div className="col-5" style={{textAlign: "center"}}>
        <HeaderSearchBox />
    </div>
    <div className="col-4" style={{textAlign:"right",cursor: "pointer"}}>
        <HeaderUser />
    </div>

</div>
        </div>
      </>
    );
  }
}
