import React, { Component } from "react";
import collegeBanner from "./banner.jpg";
import logo from "./logo.png";
import clgBuild from "../../../assets/images/clgBuild.jpeg"
import "./collegeSlider.scss";
export default class CollegeSliderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.limitString = this.limitString.bind(this);
    this.getRandomIng = this.getRandomIng.bind(this);
  }

  limitString(str){
    if(str.length>20){
      return str.substring(0,20)+".."
    }
    else{ return str}

  }

  getRandomIng(val){
 if(val%2===0){
   return collegeBanner
 }
else{ return clgBuild}
  }

  render() {
    return (
      <>
        <div
          style={{
            height: "17em",
            border: "1px solid #dbd8d7",
            borderRadius: "",
            margin: "5px",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${this.getRandomIng(this.props.id)})`,
              height: "6em",
              width: "100%",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                color: "white",
                marginLeft: "1em",
                position: "bottom",
                fontWeight: "bold",
              }}
            >
              {this.props.item.name.toUpperCase()}
            </p>
          </div>
          {/* <img src={collegeBanner} style={{height:"6em",width:"100%"}}></img> */}
          <img
            src={logo}
            style={{
              height: "4em",
              width: "4em",
              borderRadius: "2em",
              marginLeft: "1em",
              marginTop: "-2em",
            }}
          ></img>
          <div style={{ display: "flex", flexWrap: "wrap", height: "5em" }}>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#116191",
                width: "15em",
                boxShadow: "1px 1px 1px  #dbd8d7",
                // backgroundColor: "#426983",
                // borderRadius: "15px",
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              {this.limitString(this.props.item.affiliation.toUpperCase())}
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#116191",
                width: "15em",
                boxShadow: "1px 1px 1px  #dbd8d7",
                // backgroundColor: "#426983",
                // borderRadius: "15px",
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              
              DATA1
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#116191",
                width: "15em",
                boxShadow: "1px 1px 1px  #dbd8d7",
                // backgroundColor: "#426983",
                // borderRadius: "15px",
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              DATA2
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "500",
                color: "#116191",
                width: "15em",
                boxShadow: "1px 1px 1px  #dbd8d7",
                // backgroundColor: "#426983",
                // borderRadius: "15px",
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              DATA3
            </p>
          </div>
          <div style={{height:"1.5em",textAlign:"center"}}>
            <p style={{fontSize:"11px",color:"#bb9898"}}>ADMISSION 2021 REVIEWS COURSEFEES</p>
            </div>
          <div style={{ display: "flex", height: "2em", flexWrap: "wrap" }}>
            <div
              style={{
                backgroundColor: "#075D70",
                textAlign: "center",
                width: "50%",
                height: "2em",
              }}
            >
              <p style={{ color: "white", fontWeight: "500" }}>APPLY NOW</p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                textAlign: "center",
                width: "50%",
                height: "2em",
              }}
            >
              <p style={{ color: "black", fontWeight: "500" }}>GET DETAILS</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
