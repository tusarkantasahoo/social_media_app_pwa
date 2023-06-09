import React, { Component } from "react";
import "./HeaderSearchBox.css";
import searchIcon from "../../../../assets/images/search-image.png";
import { getSearchBoxData } from "../../../api/Api.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import history from "../../../pages/history/History.js";
export default class HeaderSearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collegeList: [],
      searchText: "",
    };
    this.searchFromHeader = this.searchFromHeader.bind(this);
  }

  async searchFromHeader(data) {
    console.log(data);
    var postJson = {
      term: data,
    };
    var response = await getSearchBoxData(postJson);
    console.log("Response", response);
    if (response.status === 200) {
      console.log("College List", response.data);
      this.setState({ collegeList: response.data });
    }
    this.setState({ searchText: data });
  }
  render() {
    return (
      <>
        <div
          className="header-search-box col-sm-6 col-md-4 col-lg-5"
          style={{ marginLeft: "-5em", height: "50px", marginTop: "5px" }}
        >
          <div className="p-1">
            <img className="search_icon" src={searchIcon} />
          </div>
          <input
            value={this.state.searchText}
            onChange={(e) => {
              this.searchFromHeader(e.target.value);
              console.log("change in header", e.target.value);
              // this.searchFromHeader(e.target.value);
            }}
            style={{ width: "100%" }}
            type="text"
            // value={this.state.postText}
            className="header-search-input-component"
            placeholder="Search College/Schools/Academics"
          />
        </div>
        {this.state.searchText.length !== 0 &&
        this.state.collegeList !== null &&
        this.state.collegeList !== undefined &&
        this.state.collegeList.length !== 0 ? (
          <div
            style={{
              textAlign: "left",
              backgroundColor: "white",
              marginLeft: "15em",
              width: "30em",
              color: "black",
              padding: "10px",
              position: "absolute",
              marginTop: "53em",
              boxShadow: "0 2px 5px 1px rgb(64 60 67 / 16%)",
            }}
          >
            <>
              {this.state.collegeList.map((item, id) => {
                return (
                  // <Link
                  //   style={{ textDecoration: "none" }}
                  //   to={"/academic/college/" + item.id}
                  // >
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      history.push("/academic/college/" + item.id);
                      window.location.reload();
                    }}
                  >
                    {item.name}
                  </p>
                  // </Link>
                );
              })}
            </>
          </div>
        ) : null}
      </>
    );
  }
}
