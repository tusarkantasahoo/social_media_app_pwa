import React, { Component } from "react";

export default class CollegeSliderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div
          
          style={{ border: "1px solid #1da1f2", height: "15em",width:"20em" }}
        >
          <div style={{display:"flex"}}>
          <img src={this.props.item.img} style={{ height: "5em",width:"5em",marginLeft:"0.5em",marginTop:"0.5em" }} ></img>
          <div>
          <p style={{fontSize:"15px",color:"blue",fontWeight:"500"}}>{this.props.item.name}</p>
          <p style={{fontSize:"12px",marginTop:"-1em",marginLeft:"-8em"}}>Hyderabad</p>
          <p style={{fontSize:"15px",marginTop:"-1em",marginLeft:"-2em"}}>Lane no 408, Patia</p>
          </div>
          
          </div>
          <div style={{display:"flex",marginTop:"1em",marginLeft:"0.5em"}}>
            <div>
            <p style={{fontSize:"15px",marginTop:"-1em",marginLeft:""}}>Major Courses</p>
          <p style={{fontSize:"15px",marginTop:"-1em",marginLeft:""}}>3 courses</p>
            </div>
            <div style={{marginLeft:"3em"}}>
            <p style={{fontSize:"15px",marginTop:"-1em",marginLeft:""}}>Courses</p>
          <p style={{fontSize:"15px",marginTop:"-1em",marginLeft:""}}>CAT, MAT, GATE</p>
            </div>
          </div>
          <div style={{marginLeft:"0.5em",display:"flex"}}>
            <div>
            <p style={{fontSize:"15px",marginTop:"-1em",marginLeft:""}}>Total Fee</p>
          <p style={{fontSize:"15px",marginTop:"-1em",marginLeft:""}}>3L - 8L</p>
            </div>
            
            </div>
            
          <div onClick={()=>this.props.setCollegeDetails(this.props.item)} style={{cursor:"pointer",backgroundColor: "#1da1f2",borderRadius:"10px",color:"white",width:"80%",marginLeft:"10%"}}>
            <p>Get College Details</p>
          </div>
      

        </div>
      </>
    );
  }
}
