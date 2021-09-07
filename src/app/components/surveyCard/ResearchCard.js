import React, { Component } from "react";
import history from "../../pages/history/History.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
export default class ResearchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
        <>
        <div
          style={{ border: "1px solid #1da1f2", width: "30em" }}
        >
            <div style={{display: "flex", flexDirection: "row" }}>
                <img src={this.props.item.user.userImage} style={{width:"2.5em",height:"2.5em",borderRadius: "2em"}}></img>
            <p style={{fontSize: "18px",fontWeight: "400"}}>Research by {this.props.item.user.name} </p> 
            </div>
          <p style={{fontSize: "18px",fontWeight: "600"}}>{this.props.item.title} </p>
        <div style={{display: 'flex',marginTop: '1em'}}>
        <Link style={{textDecoration: 'none'}} to={"/survey/" + this.props.item._id}>
            <div>
                View Details
            </div>
            </Link>
            <Link style={{textDecoration: 'none',marginLeft:"50%"}}   to={"/survey/" + this.props.item._id}>
            <div>
                Answer
            </div>
            </Link>

        </div>          
        </div>
      </>
    );
  }
}
