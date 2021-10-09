import React, { Component } from "react";
import "./HeaderSearchBox.css";
import searchIcon from "../../../../assets/images/search-image.png";
export default class HeaderSearchBox extends Component {
  render() {
    return (
      <>
        <div className="header-search-box col d-flex aic p-2">
          <input
            type="text"
            className="header-search-input-component col"
            placeholder="Search Everything"
          />
          <img style={{ marginTop: "4px", marginLeft: "5px", borderRadius: "3px" }} src={searchIcon} height="25px" width="25px" />
        </div>
      </>
    );
  }
}
