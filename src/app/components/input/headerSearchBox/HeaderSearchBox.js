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
    console.log(data)
    var postJson = {
      term: data,
    };
    var response = await getSearchBoxData(postJson);
    console.log("Response",response);
    if (response.status === 200) {
      console.log("College List", response.data);
      this.setState({ collegeList: response.data });
    }
    this.setState({ searchText: data });
  }
  render() {
    return (
      <>
        <div className="header-search-box">
          <div class="row" style={{ marginTop: "5px" }}>
            <div class="col-2">
              <img
                style={{
                  marginTop: "4px",
                  marginLeft: "5px",
                  borderRadius: "3px",
                }}
                src={searchIcon}
                height="35px"
                width="35px"
              />
            </div>
            <div class="col-7">
              <input
                value={this.state.searchText}
                onChange={(e) => {
                  this.searchFromHeader(e.target.value);
                  console.log("change in header",e.target.value)
                  // this.searchFromHeader(e.target.value);
                }}
                type="text"
                value={this.state.postText}
                className="header-search-input-component"
                placeholder="Search Academics"
              />
            </div>
          </div>
        </div>
        {this.state.searchText.length !== 0 &&
        this.state.collegeList !== null &&
        this.state.collegeList !== undefined &&
        this.state.collegeList.length !== 0 ? (
          <div
            style={{
              textAlign: "left",
              backgroundColor: "white",
              marginLeft:"28em",
              width: "30em",
              color: "black",
              padding: "10px",
              position: "absolute",
              marginTop:"3.5em",
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
