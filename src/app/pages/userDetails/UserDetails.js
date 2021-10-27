import React, { Component } from "react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import cancel from "../../../assets/images/cancel.png";
import {getUserPosts,getSurveyCratedByUser} from "../../api/Api.js";
import SurveyMovingCard from "../../components/surveyCard/SurveyMovingCard.js";
import Post from "../../components/posts/Post.js";
export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: JSON.parse(localStorage.getItem(authResponseStoredValue))
        .userData,
      userSelectedTopic: { name: "Posts", code: "posts" },
      posts:[],
      userSurvey:[]
    };
    this.renderUserTopicBySelection =
      this.renderUserTopicBySelection.bind(this);
  }

  render() {
    var userTopics = [
      { name: "Posts", code: "posts" },
      { name: "Survey", code: "survey" },
      { name: "About", code: "about" },
      { name: "Activity", code: "activity" },
      { name: "Skills", code: "skills" },
      { name: "Communities", code: "communities" },
      { name: "Followers", code: "followers" },
      { name: "Books", code: "books" },
      { name: "E-notes", code: "enotes" },
    ];
    console.log("Top");
    return (
      <>
        <div
          className="conteiner"
          style={{
            textAlign: "right",
            marginBottom: "1em",
            fontSize: "22px",
            marginRight: "20px",
          }}
        ></div>

          <div
            style={{
              height: "15em",
              border: "1px solid black",
              borderRadius: "10px",
              width: "100%",
            }}
          ></div>

          <div>
            <img
              src={this.state.userData.userImage}
              style={{
                heigh: "8em",
                width: "8em",
                borderRadius: "8em",
                marginTop: "-1em",
              }}
            ></img>

            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              {this.state.userData.name}
            </p>
            <p style={{ fontSize: "15px" }}>{this.state.userData.email}</p>
          </div>

          <div style={{ display: "flex" }}>
            {userTopics.map((item, index) => {
              return (
                <p
                  style={{
                    marginLeft: "0.5em",
                    width: "",
                    fontSize: "22px",
                    cursor: "pointer",
                  }}
                  onClick={() => this.setState({ userSelectedTopic: item })}
                >
                  {item.name}
                </p>
              );
            })}
          </div>

          <div
           
          >
            {this.renderUserTopicBySelection()}
          </div>

      </>
    );
  }

  renderUserTopicBySelection() {
    switch (this.state.userSelectedTopic.code) {
      case "about":
        return (
          <>
            <div className="row">
              <div className="col-11">
                <p style={{ fontSize: "20px" }}>
                  Name:{this.state.userData.name}
                </p>
                <p style={{ fontSize: "20px" }}>
                  Phone:{this.state.userData.phone}
                </p>
                <p style={{ fontSize: "20px" }}>Dob:</p>
                <p style={{ fontSize: "20px" }}>City:</p>
              </div>
              <div className="col-1">
                <p style={{ cursor: "pointer" }}>Edit</p>
              </div>
            </div>
          </>
        );
      case "posts":
        return (
          <>
            <div className="row">
              {this.state.posts.map((item, index) => {
                return (
                  <Post
                    props={item}
                  />
                );
              })}
            </div>
          </>
        );
        case "survey":
          return (
            <>
              <div className="row">
                {this.state.userSurvey.map((item, index) => {
                  return (
                    <SurveyMovingCard item={item}/>
                  );
                })}
              </div>
            </>
          );
      default:
        return (<>CommingSoon</>);
    }
  }

async componentDidMount() {
  var payload={
    userId:this.state.userData._id
  }
  var response = await getUserPosts(payload)
  if(response.status === 200){
    this.setState({posts:response.data.response})
  }
  var responseSurveyListUser = await getSurveyCratedByUser(payload);
  if (responseSurveyListUser.status === 200) {
    console.log("Response from survey", responseSurveyListUser);
    this.setState({ userSurvey: responseSurveyListUser.data.response });
  }
}
}
