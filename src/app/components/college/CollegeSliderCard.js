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
          className="container-fluid"
          style={{ border: "1px solid #1da1f2", height: "15em" }}
        >
          <img src={this.props.item.img} style={{ height: "7em" }}></img>
          <p>{this.props.item.name}</p>

            
          <div style={{backgroundColor: "#1da1f2",borderRadius:"10px",color:"white"}}>
            <p>Get College Details</p>
          </div>
          <p style={{fontSize: "10px"}}>Courses  Btech Mtech MBA</p>

        </div>
      </>
    );
  }
}
