import React, { Component } from "react";
import PostMessageBox from "./postMessgaeBox/PostMessageBox.js";
export default class HomeSocial extends Component {
    render() {
      return (
       <>
       <div style={{textAlign:"left"}}>
       <p style={{fontSize:"25px",fontWeight:"bold",marginTop:"15px"}}>
        Home
        </p>
        </div>
        <PostMessageBox />
       </>
      );
    }
  }