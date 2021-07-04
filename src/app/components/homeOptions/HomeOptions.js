import React, { Component } from "react";
export default class HomeOptions extends Component {
    render() {
      return (
       <>
        <div style={{textAlign:"left",marginLeft:"10px",marginTop:"5%"}}>
        <p style={{fontSize:"23px",color:"#1da1f2",cursor:"pointer",fontWeight:"bold"}}>Home</p>
        <p style={{fontSize:"23px",cursor:"pointer",fontWeight:"bold"}}>Rooms</p>
        <p style={{fontSize:"23px",cursor:"pointer",fontWeight:"bold"}}>Academic</p>
        <p style={{fontSize:"23px",cursor:"pointer",fontWeight:"bold"}}>Career</p>
        <p style={{fontSize:"23px",cursor:"pointer",fontWeight:"bold"}}>Forum</p>
        <p style={{fontSize:"23px",cursor:"pointer",fontWeight:"bold"}}>Survey</p>
        <p style={{fontSize:"23px",cursor:"pointer",fontWeight:"bold"}}>Self Help</p>
        <p style={{fontSize:"23px",cursor:"pointer",fontWeight:"bold"}}>Jobs</p>
        <p style={{fontSize:"23px",cursor:"pointer",fontWeight:"bold"}}>Skills</p>
        <p style={{fontSize:"23px",cursor:"pointer",fontWeight:"bold"}}>Repository</p>
        </div>
       </>
      );
    }
  }
  