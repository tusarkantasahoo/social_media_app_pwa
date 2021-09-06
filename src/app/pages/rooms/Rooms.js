import React, { Component } from "react";
import PostMessageBox from "../../components/homeSocial/postMessgaeBox/PostMessageBox.js";
// import dataForPostRooms from "../../testData/TestData.js";
import Post from "../../components/posts/Post.js";
import SinglePostView from "../../components/openPosts/SinglePostView.js";
import filterpng from "../../../assets/images/filterpng.png";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { getPostsList } from "../../api/Api.js";
export default class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnyNewsClicked: false,
      fullScreenNewsContent: {},
      dataForPostRooms: [],
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
            <PostMessageBox isLoggedIn={this.props.isLoggedIn} />
            <div style={{ marginTop: "3%", textAlign: "left" }}>
              {/* <div className="container-fluid"> */}
              <div className="d-flex aic jcsb">
                <div className="col-6" style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    Posts
                  </p>
                </div>
                <div className="ms-auto">
                  <a className="d-flex mt-3 aic" >
                    <img src={filterpng} style={{ width: "50px" }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              {this.state.dataForPostRooms.map((item, index) => {
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

  async componentDidMount() {
    var responsePostList = await getPostsList();
    if (responsePostList.status === 200) {
      console.log("responsePostList", responsePostList);
      this.setState({ dataForPostRooms: responsePostList.data.response.reverse() });
    }
  }
}
