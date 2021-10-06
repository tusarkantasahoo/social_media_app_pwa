import React, { Component } from "react";
import HeaderSearchBox from "../input/headerSearchBox/HeaderSearchBox.js";
import HeaderUser from "../headerUser/HeaderUser.js";
import "./AppHeader.css";
// import HomeIcon from '@mui/icons-material/Home';
import logo from "../../../assets/images/logo.png";
import user_w from "../../../assets/images/user_w.png";
import treepng from "../../../assets/images/treepng.png";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import monastreeLogo from "../../../assets/images/phase2Img/m.png";
import home from "../../../assets/images/phase2Img/home.png"
import bell from "../../../assets/images/phase2Img/bell.png"
import help from "../../../assets/images/phase2Img/help.png";
// import NotificationsIcon from '@mui/icons-material/Notifications.js';
// import HelpIcon from '@mui/icons-material/Help.js';
// import SettingsIcon from '@mui/icons-material/Settings.js';
export default class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("Props in headre",this.props);
    return (
      <>
        {this.props.isLoggedIn ? (
          <div
            className="container-fluid"
            style={{  display:"flex",height: "4em",backgroundImage: "linear-gradient(to right,#111820, #9e9ebb)" }}
          >
           
            
                <div className="logo_wrapper">
                  {/* <img src={treepng} className="img_res"></img>
                  <img src={logo} className="img_res"></img> */}
                  <img src={monastreeLogo} className="img_res"></img>
                  <p style={{color:"white",marginTop:"-0.5em"}}>MONASTREE</p>
                  {/* <p style={{fontSize:"26px",color:"white",marginLeft:"5px"}}>MONASTREE</p> */}
                  
               
              </div>
           
                <HeaderSearchBox />
                <p style={{fontSize:"18px",fontWeight:"bold",color:"white",marginLeft:"1em",marginTop:"1em"}}>NEWS FEED</p>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
</svg> */}
{/* <HomeIcon />
<NotificationsIcon /> */}

                <img src={home} style={{height:"2em",width:"2em",marginTop:"1em",marginLeft:"3em"}} className="img_res"></img>
                <img src={bell} style={{height:"2em",width:"2em",marginTop:"1em",marginLeft:"3em"}} className="img_res"></img>
                <img src={help} style={{height:"2em",width:"2em",marginTop:"1em",marginLeft:"3em"}} className="img_res"></img>
                <div style={{width:"30%"}}></div>
            
              <div
              
                style={{ textAlign: "right", cursor: "pointer" }}
              >
                <HeaderUser
                  updateAuthState={this.props.updateAuthState}
                  _onClickUserDashboard={this.props._onClickUserDashboard}
                  _changeScreenRender={this.props._changeScreenRender}
                />
              </div>
         
          </div>
        ) : (

          <div
            className="container-fluid px-0"
            style={{  height: "50px",backgroundImage: "linear-gradient(to right,#0da5a5, #9e9ebb)" }}
          >
            <div className="row container mx-auto px-0">
              <div className="col px-0">
                <div className="logo_wrapper">
                  {/* <img src={treepng} className="img_res"></img>
                  <img src={logo} className="img_res"></img> */}
                  <img src={monastreeLogo} className="img_res"></img>
                  {/* <p style={{fontSize:"26px",color:"white",marginLeft:"5px"}}>MONASTREE</p> */}
                </div>
              </div>
              <div className="col-5" style={{ textAlign: "center" }}>
                <HeaderSearchBox />
              </div>
              <div
                className="col-4 d-flex jcfe aic">
              <Link to="/login" style={{textDecoration: "none"}}>
                <img src={user_w} className="userIcon"/>
                </Link>
              </div>
            </div>
          </div>

       )}
      </>
    );
  }
}
