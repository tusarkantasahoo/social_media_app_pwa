import React, { Component } from "react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import cancel from "../../../assets/images/cancel.png";
export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userData:JSON.parse(localStorage.getItem(authResponseStoredValue)).userData,
        userSelectedTopic:{ name: "About", code: "about" }
    };
    this.renderUserTopicBySelection = this.renderUserTopicBySelection.bind(this);

  }

  render() {
    var userTopics = [
      { name: "About", code: "about" },
      { name: "Activity", code: "activity" },
      { name: "Skills", code: "skills" },
      { name: "Communities", code: "communities" },
      { name: "Followers", code: "followers" },
      { name: "Books", code: "books" },
      { name: "E-notes", code: "enotes" },
    ];
    return (
      <>
        <div
          className="conteiner"
          style={{
            textAlign: "right",
            marginBottom: "1em",
            fontSize: "22px",
            marginRight: "20px",
          }}
        >
            <div style={{cursor: "pointer"}} onClick={()=>{
                this.props._onClickUserDashboard();
            }}>
          Close
          <img
            src={cancel}
            style={{ height: "22px", width: "22px", marginTop: "0em" }}
          ></img>
          </div>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <div
            style={{
              height: "15em",
              border: "1px solid black",
              borderRadius: "10px",
              width: "100%",
            }}
          ></div>

          <div>
            <img
              src={this.state.userData.userImage}
              style={{
                heigh: "8em",
                width: "8em",
                borderRadius: "8em",
                marginTop: "-1em",
              }}
            ></img>

            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              {this.state.userData.name}
            </p>
            <p style={{ fontSize: "15px" }}>
              {this.state.userData.email}
            </p>
          </div>

          <div style={{ display: "inline-flex", float: "left" }}>
            {userTopics.map((item, index) => {
              return (
                <p style={{ width: "6em", fontSize: "22px",cursor: "pointer"}} onClick={()=>this.setState({userSelectedTopic:item})}>{item.name}</p>
              );
            })}
          </div>


          <div style={{height:"15em",border:"1px solid",marginTop:"5em",borderRadius:"10px",textAlign:"left",padding: "10px"}}>

          {this.renderUserTopicBySelection()}
            
          </div>
        </div>
      </>
    );
  }


  renderUserTopicBySelection(){
     switch(this.state.userSelectedTopic.code){
         case "about":return(<>
                       <div className="row">
                <div className="col-11">
                <p style={{fontSize:"20px"}}>Name:{this.state.userData.name}</p> 
           <p style={{fontSize:"20px"}}>Phone:{this.state.userData.phone}</p>
           <p style={{fontSize:"20px"}}>Dob:</p> 
           <p style={{fontSize:"20px"}}>City:</p> 
                </div>
                <div className="col-1">
                <p style={{cursor: "pointer" }}>Edit</p>
                </div>
              </div>
         </>);
         default :return null;
     } 
  }
}
