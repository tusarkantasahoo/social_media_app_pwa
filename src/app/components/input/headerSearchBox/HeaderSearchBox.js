import React, { Component } from "react";
import "./HeaderSearchBox.css";
import searchIcon from "../../../../assets/images/search-image.png";
export default class HeaderSearchBox extends Component {
  render() {
    return (
      <>
        <div className="header-search-box">

          <div class="row" style={{marginTop:"5px"}}>
            <div class="col-2"><img style={{marginTop:"4px", marginLeft:"5px",borderRadius:"3px"}} src={searchIcon} height="35px" width = "35px"/></div>
            <div class="col-7">
            <input
              type="text"
              className="header-search-input-component"
              placeholder="Search Everything"
            />
            </div>
          </div>
        </div>
      </>
    );
  }
}
