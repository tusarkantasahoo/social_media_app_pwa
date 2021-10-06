import React, { Component } from "react";
import HomeOptions from "../../components/homeOptions/HomeOptions.js";
import HomeSocial from "../../components/homeSocial/HomeSocial.js";
import AppHeader from "../../components/header/AppHeader.js";
import { userReloginCheckToken } from "../../../auth/AuthApi.js";
import UserDetails from "../../pages/userDetails/UserDetails.js";
import Academic from "../academic/Academic.js";
import Survey from "../survey/Survey.js";
import SurveyResponse from "../survey/SurveyResponse.js";
import CollegePage from "../academic/CollegePage.js";
import CommingSoon from "../commingSoon/CommingSoon.js";
import CollegeDetails from "../academic/CollegeDetails.js";
import careericon from "../../../assets/images/home/career.png";
import forumicon from "../../../assets/images/home/forum.png";
import jobicon from "../../../assets/images/home/job.png";
import othericon from "../../../assets/images/home/others.png";
import plannericon from "../../../assets/images/home/planner.png";
import repoicon from "../../../assets/images/home/repo.png";
import roomicon from "../../../assets/images/home/room.png";
import skillicon from "../../../assets/images/home/skills.png";
import academicicon from "../../../assets/images/home/book.png";
import surveyicon from "../../../assets/images/home/survey.png";
import home from "../../../assets/images/phase2Img/home.png";
import girl from "../../../assets/images/girl.jpg";
import girl1 from "../../../assets/images/girl1.jfif";
import girl2 from "../../../assets/images/girl2.jpg";
import girl3 from "../../../assets/images/girl3.jpg";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      optionArray: [
        { name: "Home", code: "home",icon:home },
        { name: "Rooms", code: "rooms",icon:roomicon },
        { name: "Academic", code: "academic",icon:academicicon },
        { name: "Career", code: "career",icon:careericon },
        { name: "Forum", code: "Forum",icon:forumicon },
        { name: "Survey", code: "survey",icon: surveyicon},
        { name: "Self Help", code: "selfHelp",icon:othericon },
        { name: "Jobs", code: "jobs",icon: careericon},
        { name: "Skills", code: "skills",icon:skillicon },
        { name: "Repository", code: "repository",icon: repoicon},
      ],
      currentOption: props.page,
      isUserDashboard: false,
      screenManage: "social",
      people : [
        {name:"Jennifer Sen",
      image:girl,},
      {name:"Lawrence Sahoo",
      image:girl1},
      {name:"Emaa Watson",
      image:girl2,},
      {name:"Jane foster",
      image:girl3,},
      {name:"Becker joe",
      image:girl,},
      {name:"Jenny may",
      image:girl1},
      ]
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    // this.updateOptionOnClick = this.updateOptionOnClick.bind(this);
    this._onClickUserDashboard = this._onClickUserDashboard.bind(this);
    this.renderScreenDependingOnSelection =
      this.renderScreenDependingOnSelection.bind(this);
    this._changeScreenRender = this._changeScreenRender.bind(this);
  }
 

  _onClickUserDashboard() {
    this.setState({ isUserDashboard: !this.state.isUserDashboard });
  }

  _changeScreenRender(data) {
    this.setState({ currentOption: data });
  }
 
  renderScreenDependingOnSelection() {
    console.log("Home render", this.state.currentOption.code);
    switch (this.state.currentOption.code) {
      case "home":
        return (
          <>
          <div className="col-5" id="home-social" >
          <div style={{marginLeft:"0%",backgroundColor:"white",marginTop:"1em",borderRadius:"1em"}}>
            <HomeSocial props={this.state} isLoggedIn={this.props.isAuthed} />
            </div>
          </div>
          <div className="col-4">

        <div>
        <iframe style={{width:"100%",height:"37em",marginTop:"1em"}} src={"http://feeds.bbci.co.uk/news/world/rss.xml"}></iframe>
        </div>
        <div style={{ backgroundColor:"white",textAlign: "left", marginLeft: "", marginTop: "5%",borderRadius:"1em", boxShadow: "4px 10px 8px  #dbd8d7",padding:"1em" }}>
<p style={{fontSize:"22",fontWeight:"500"}}>People</p>
          {this.state.people.map((item, index) => {
            return (
              <>
               
                  <div className="sidebar_menu" style={{display:"flex",marginTop: "1em",marginLeft: "1em"}}>
             
                  <img src={item.image} style={{height:"3em",width:"3em",borderRadius:"3em"}}></img>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#1da1f2",
                        cursor: "pointer",
                        fontWeight: "bold",
                        marginLeft:"1em",
                        width:"16em"
                      }}
                    >
                      {item.name}
                      
                    </p>
                    <a style={{marginLeft:"4em",borderRadius: "3.25rem",width:"7em"}} class="btn btn-outline-info" href="#">connect</a>
                  </div>
    
                  </>
                )}
        )}
        </div>


          </div>
          </>
        );

      case "rooms":
        return (
          <>
          <div className="col-5" id="home-social">
           <div style={{marginLeft:"0%",backgroundColor:"white",marginTop:"1em",borderRadius:"1em"}}>
            <HomeSocial props={this.state} isLoggedIn={this.props.isAuthed} />
            </div>
          </div>
          <div className="col-4">

        
        <div style={{ backgroundColor:"white",textAlign: "left", marginLeft: "", marginTop: "5%",borderRadius:"1em", boxShadow: "4px 10px 8px  #dbd8d7",padding:"1em" }}>
<p style={{fontSize:"22",fontWeight:"500"}}>People</p>
          {this.state.people.map((item, index) => {
            return (
              <>
               
                  <div className="sidebar_menu" style={{display:"flex",marginTop: "1em",marginLeft: "1em"}}>
             
                  <img src={item.image} style={{height:"3em",width:"3em",borderRadius:"3em"}}></img>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#1da1f2",
                        cursor: "pointer",
                        fontWeight: "bold",
                        marginLeft:"1em",
                        width:"16em"
                      }}
                    >
                      {item.name}
                      
                    </p>
                    <a style={{marginLeft:"4em",borderRadius: "3.25rem",width:"7em"}} class="btn btn-outline-info" href="#">connect</a>
                  </div>
    
                  </>
                )}
        )}
        </div>
        <div>
        <iframe style={{width:"100%",height:"37em",marginTop:"1em"}} src={"http://feeds.bbci.co.uk/news/world/rss.xml"}></iframe>
        </div>

          </div>
                    </>
        );

      case "userDetails":
        return (
          <div className="col-10" id="home-social">
            <UserDetails
              _onClickUserDashboard={this._onClickUserDashboard}
              isLoggedIn={this.props.isAuthed}
            />
          </div>
        );

      case "academic":
        return (
          <div className="col-10" id="">
            <Academic />
          </div>
        );

      case "survey":
        return (
          <div className="col-10" id="home-social">
            <Survey />
          </div>
        );

      case "surveyResponse":
        return (
          <div className="col-10" id="home-social">
            <SurveyResponse />
          </div>
        );

      case "college":
        return (
          <div className="col-10" id="home-social">
            <CollegePage />
          </div>
        );

        case "collegeDetails":
          return (
            <div className="col-10" id="home-social">
              <CollegeDetails />
            </div>
          );

      case "career":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );
      case "jobs":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );
      case "forum":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );

      case "selfHelp":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );

      case "skills":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );

      case "repository":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );

      case "planner":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );
      case "others":
        return (
          <div className="col-10" id="home-social">
            <CommingSoon />
          </div>
        );

      default:
        return null;
    }
  }

  render() {

  
    console.log("Room constructor called", this.props);
    console.log("Room constructor called2", this.state);
    return (
      <>
        <AppHeader
          updateAuthState={this.props.updateAuthState}
          _onClickUserDashboard={this._onClickUserDashboard}
          isLoggedIn={this.props.isAuthed}
          _changeScreenRender={this._changeScreenRender}
        />
        <div className="container-fluid" style={{backgroundColor:"aliceblue"}}>
          <div className="row" style={{ display: "flex" }}>
            <div
              className="col-3"
              id="home-options"
              style={{
                boxShadow: "0px 2px 3px #dbd8d7",
                // height: `${this.state.height.toString() - 60}px`,
              }}
            >
              <HomeOptions
                props={this.state}
                isLoggedIn={true}
                setPage={this.props.setPage}
                history={this.props.history}
              />

            </div>
            {this.renderScreenDependingOnSelection()}
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    console.log("dimensions", this.state.width, this.state.height);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
}
