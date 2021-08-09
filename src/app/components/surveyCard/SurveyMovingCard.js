import React, { Component } from "react";

export default class SurveyMovingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div
          
          style={{ border: "1px solid #1da1f2", height: "15em",width:"15em" }}
        >
       
        {this.props.item.question}

        <br></br>
        <br></br>
        Survey Type : {this.props.item.surveyType}

        <div style={{backgroundColor: "#1da1f2",color:"White",marginTop:"5em"}}>
            Give Response
        </div>
        <p style={{fontSize:"15px",marginTop:"1em"}}>Total Response:100</p>
        </div>
      </>
    );
  }
}
