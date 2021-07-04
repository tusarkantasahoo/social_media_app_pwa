import React, { Component } from "react";
import PostMessageBox from "./postMessgaeBox/PostMessageBox.js";
export default class HomeSocial extends Component {
  constructor(props) {
    super(props);
    this.state = { width: props.props.width, height: props.props.height };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
    render() {
      console.log("height in social",this.state.height);
      return (
       <>
       <div className="container" style={{overflow:"scroll",height:`${this.state.height-70}px`}}>
        <PostMessageBox />
        <div className="home-all-details" style={{marginTop:"3%"}}>
          <p style={{color:"#0089ff",fontSize:"42px"}}>Who we are ?</p>
          <p style={{fontSize:"30px"}}>
            Where individuals meets Education / Career / Jobs <br></br>
            Skills / Community at single Platform
          </p>
        </div>
        </div>
       </>
      );
    }
  }