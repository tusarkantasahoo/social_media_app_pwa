import React, { Component } from "react";
import PostMessageBox from "../../components/homeSocial/postMessgaeBox/PostMessageBox.js";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }
    render() {

      return (
       <>
        <PostMessageBox />
        <div className="home-all-details" style={{marginTop:"3%"}}>
          <p style={{color:"#0089ff",fontSize:"42px"}}>Who we are ?</p>
          <p style={{fontSize:"30px"}}>
            Where individuals meets Education / Career / Jobs <br></br>
            Skills / Community at single Platform
          </p>
        </div>
       </>
      );
    }
  }