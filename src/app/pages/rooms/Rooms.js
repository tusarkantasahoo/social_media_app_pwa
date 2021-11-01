import React, { Component } from "react";
import PostMessageBox from "../../components/homeSocial/postMessgaeBox/PostMessageBox.js";
// import dataForPostRooms from "../../testData/TestData.js";
import Post from "../../components/posts/Post.js";
import SinglePostView from "../../components/openPosts/SinglePostView.js";
import filterpng from "../../../assets/images/filterpng.png";
import MaterialIcon, { colorPalette } from "material-icons-react";
import { getPostsList } from "../../api/Api.js";
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

export default class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnyNewsClicked: false,
      fullScreenNewsContent: {},
      dataForPostRooms: [],
      pageNo: 0,
    };
    this.handelNewsClick = this.handelNewsClick.bind(this);
    this.handelNewsClose = this.handelNewsClose.bind(this);
    this.setNewsItem = this.setNewsItem.bind(this);
    this.addNewPosts = this.addNewPosts.bind(this);
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

  async addNewPosts() {
    console.log("Add post clicked")
    var postJson = { pageNo: this.state.pageNo + 1 }
    var response = await getPostsList(postJson)
    if (response.status === 200) {
      console.log("responsePostList", response);

      var data = this.state.dataForPostRooms;
      if (response.data.response.length > 0) {
        for (var i = 0; i < response.data.response.length; i++) {
          data = [...data, response.data.response[i]]
        }
      }
      this.setState({
        dataForPostRooms: data
      });
    }

    this.setState({ pageNo: this.state.pageNo + 1 });

  }
  render() {
    console.log("state in post", this.state.dataForPostRooms)
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
            <div style={{ marginTop: "3%", textAlign: "left",backgroundColor: "white",padding:"1em",borderRadius: "1em"}}>
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
                  <a className="d-flex mt-3 aic">
                    <img src={filterpng} style={{ width: "50px" }} />
                  </a>
                </div>
              </div>
            </div>
            <div style={{height:"1em"}}></div>
            <div className="row">

              {this.state.dataForPostRooms.map((item, index) => {
                return (
                  <div style={{backgroundColor: "white",marginBottom:"0.5em",borderRadius: "1em"}}>
                  <Post
                    props={item}
                    handelNewsClick={this.handelNewsClick}
                    setNewsItem={this.setNewsItem}
                    isLoggedIn={this.props.isLoggedIn}
                  />
                  </div>
                );
              })}
              <div onClick={() => { this.addNewPosts() }} className="d-flex jcc">

                <Button variant="contained">
                  <CircularProgress color="light" className="load_spinner"/>
                  Load more
                </Button>
              </div>

            </div>
          </>
        )}
      </>
    );
  }

  async componentDidMount() {
    var postJson = { pageNo: 0 }
    var responsePostList = await getPostsList(postJson);
    if (responsePostList.status === 200) {
      console.log("responsePostList", responsePostList);
      this.setState({
        dataForPostRooms: responsePostList.data.response,
      });
    }

 
  }
  
  
}
