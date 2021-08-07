import React, { Component } from "react";
import PostMessageBox from "../../components/homeSocial/postMessgaeBox/PostMessageBox.js";
import dataForPostRooms from "../../testData/TestData.js";
import Post from "../../components/posts/Post.js";
import SinglePostView from "../../components/openPosts/SinglePostView.js";
export default class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnyNewsClicked: false,
      fullScreenNewsContent: {},
    };
    this.handelNewsClick = this.handelNewsClick.bind(this);
    this.handelNewsClose = this.handelNewsClose.bind(this);
    this.setNewsItem = this.setNewsItem.bind(this);
  }

  handelNewsClick() {
    this.setState({ isAnyNewsClicked: true });
  }
  handelNewsClose() {
    this.setState({ isAnyNewsClicked: false });
  }
  setNewsItem(item) {
    this.setState({ fullScreenNewsContent: item });
    console.log("News set", item);
  }
  render() {
    return (
      <>
        {/* </div> */}
        {this.state.isAnyNewsClicked === true ? (
          <SinglePostView
            props={this.state}
            handelNewsClose={this.handelNewsClose}
          />
        ) : (
          <>
            <PostMessageBox isLoggedIn={this.props.isLoggedIn}/>
            <div style={{ marginTop: "3%", textAlign: "left" }}>
              {/* <div className="container-fluid"> */}
              <div
                className="row"
                style={{
                  border: "0.5px light black",
                  boxShadow: "4px 10px 8px #dbd8d7",
                  borderRadius: "15px",
                }}
              >
                <div className="col-6" style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    Posts
                  </p>
                </div>
                <div className="col-6" style={{ textAlign: "right" }}>
                  <button
                    style={{
                      marginTop: "3%",
                      backgroundColor: "#f2f1ed",
                      height: "45px",
                      width: "100px",
                      border: "0.5px solid black",
                      borderRadius: "5px",
                    }}
                  >
                    <p style={{ fontSize: "22px", marginTop: "3%" }}>Filters</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              {dataForPostRooms.map((item, index) => {
                return (
                  <Post
                    props={item}
                    handelNewsClick={this.handelNewsClick}
                    setNewsItem={this.setNewsItem}
                    isLoggedIn={this.props.isLoggedIn}
                  />
                );
              })}
            </div>
          </>
        )}
      </>
    );
  }
}
