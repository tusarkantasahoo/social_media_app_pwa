import React, { Component } from "react";
import HeaderSearchBox from "../input/headerSearchBox/HeaderSearchBox.js";
import HeaderUser from "../headerUser/HeaderUser.js";
export default class AppHeader extends Component {
  render() {
    return (
      <>
        <div
        className="container-fluid"
         style={{ backgroundColor: "#0089ff", height: "50px" }}>
<div className="row">
    <div className="col-3">

    </div>
    <div className="col-5" style={{textAlign: "center"}}>
        <HeaderSearchBox />
    </div>
    <div className="col-4" style={{textAlign:"right"}}>
        <HeaderUser />
    </div>

</div>
        </div>
      </>
    );
  }
}
