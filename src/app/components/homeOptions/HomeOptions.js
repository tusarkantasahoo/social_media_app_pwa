import React, { Component } from "react";
export default class HomeOptions extends Component {
    render() {
      return (
       <>
       <p style={{fontSize:"28px",color:"#1da1f2",marginTop:"5%",cursor:"pointer"}}>
        Monastree
        </p>
        <div style={{textAlign:"left",marginLeft:"10px",marginTop:"30%"}}>
        <p style={{fontSize:"27px",color:"#1da1f2",cursor:"pointer"}}>Home</p>
        <p style={{fontSize:"27px",cursor:"pointer"}}>Discover</p>
        <p style={{fontSize:"27px",cursor:"pointer"}}>Exams</p>
        <p style={{fontSize:"27px",cursor:"pointer"}}>Blogs</p>
        <p style={{fontSize:"27px",cursor:"pointer"}}>E-Library</p>
        </div>
       </>
      );
    }
  }
  