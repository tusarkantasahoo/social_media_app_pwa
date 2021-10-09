import React, { Component } from "react";
import history from "../../pages/history/History.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
export default class QuizCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    var analytics = this.props.item.options;
    var total=0;
    for(var i =0 ;i<analytics.length;i++){
        total = total + analytics[i].vote;
    }
    console.log("Total votes",total);
    return (
        <>
        <div
          style={{ border: "1px solid #EAE3E1", width: "30em",padding:"15px", boxShadow: "4px 10px 8px  #dbd8d7",borderRadius:"5px" }}
        >
            <div style={{display: "flex", flexDirection: "row" }}>
                <img src={this.props.item.user.userImage} style={{width:"2.5em",height:"2.5em",borderRadius: "2em"}}></img>
            <p style={{fontSize: "22px",fontWeight: "400",marginLeft:"0.5em",fontWeight:"400"}}>Quiz by {this.props.item.user.name} </p> 
            </div>
          <p style={{fontSize: "18px",fontWeight: "600"}}>{this.props.item.title} </p>
        {this.props.item.options.map((item,index) => {
            return (
                <>
                <p style={{fontSize: "18px",fontWeight: "400"}}>{item.name}</p>
                <div class="progress" style={{height:"1em",marginTop:"-0.5em"}}>
                <div class="progress-bar" role="progressbar" style={{width: (item.vote/total*100).toString()+"%"}}  aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                </>
                
            )
        })}
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
