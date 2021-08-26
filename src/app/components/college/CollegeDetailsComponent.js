import React, { useRef, useState, Component } from "react";

export default class CollegeDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {


    };
  }



  render() {
      console.log(this.props);

    var currentSelection = this.props.currentSelection;
    var details = this.props.collegeDetails;
    if(currentSelection==="info"){
        return (
            <>
              <div className="container">
                <p>{details.info}</p>
              </div>
            </>
          );
    }

    else if(currentSelection==="courses&fees"){
        return (
            <>
              <div className="container">
                <p>{details.coursesAndFees}</p>
              </div>
            </>
          );
    }
    else if(currentSelection==="admission"){
        return (
            <>
              <div className="container">
                <p>{details.admission}</p>
              </div>
            </>
          );
    }
    else if(currentSelection==="review"){
        return (
            <>
              <div className="container">
                <p>{details.review}</p>
              </div>
            </>
          );
    }
    else if(currentSelection==="cutoff"){
        return (
            <>
              <div className="container">
                <p>{details.cutoff}</p>
              </div>
            </>
          );
    }
    else if(currentSelection==="placement"){
        return (
            <>
              <div className="container">
                <p>{details.placements}</p>
              </div>
            </>
          );
    }
    else if(currentSelection==="gallary"){
        return (
            <>
              <div className="container" style={{display:"flex",flexWrap: "wrap" }}>
                {details.img!==null&&details.img!==undefined?(<img src={details.img}></img>):null}
                {details.img!==null&&details.img!==undefined?(<img src={details.logo}></img>):null}
                {details.img!==null&&details.img!==undefined?(<img src={details.banner}></img>):null}
              </div>
            </>
          );
    }
    else if(currentSelection==="faculty"){
        return (
            <>
              <div className="container">
                <p>{details.facilities}</p>
              </div>
            </>
          );
    }
    else if(currentSelection==="hostel"){
        return (
            <>
              <div className="container">
                <p>{details.facilities}</p>
              </div>
            </>
          );
    }
    else {return null}



  }
}
