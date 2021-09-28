import React, { Component } from "react";
import collegeBanner from "./banner.jpg";
import logo from "./logo.png";
import "./collegeSlider.scss";
export default class CollegeSliderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <div
        onClick={() => this.props.setCollegeDetails(this.props.item)}
          style={{ border: "1px solid #1da1f2", height: "15em", width: "20em",cursor: "pointer" }}
        >
          <div>
            <img
              src={this.props.item.banner || collegeBanner}
              style={{
                height: "4em",
                width: "90%",
                marginLeft: "0.5em",
                marginTop: "0.5em",
              }}
            ></img>
          </div>
          <div style={{ display: "flex" }}>
            <img
              src={this.props.item.logo || logo }
              style={{
                height: "3em",
                width: "3em",
                marginLeft: "0.5em",
                marginTop: "-1em",
              }}
            ></img>
            <div style={{textAlign: "left"}}>
              <p style={{ fontSize: "15px", color: "blue", fontWeight: "500" }}>
                {this.props.item.name}
              </p>
              <p style={{ fontSize: "10px", color: "black", fontWeight: "400",marginTop:"-1.5em" }}>
                {this.props.item.city}
              </p>
            </div>
          </div>
          <div style={{display:"flex",textAlign: "center",flexWrap:"wrap"}}>
              <p style={{fontSize: "12px", color: "black",width:"50%",border:"1px solid black"}}>{this.props.item.affiliation}</p>
            <p style={{fontSize: "12px", color: "black",width:"50%",border:"1px solid black"}}>{this.props.item.ranking!==null&&this.props.item.ranking!==undefined? this.props.item.ranking.substring(0,20):""}</p>
            <p style={{fontSize: "12px", color: "black",width:"50%",border:"1px solid black"}}>{this.props.item.examAccepted} Accepted</p>
            <p style={{fontSize: "12px", color: "black",width:"50%",border:"1px solid black"}}>Avg. Course Fee {this.props.item.averageCourseFee} </p>
          </div>

    
           

     

        </div> */}
        <div class="outer-div" >
  <div class="inner-div">
    <div class="front">
      <div class="front__bkg-photo" >
      <img
              src={this.props.item.banner || collegeBanner}
              style={{
                
                width: "90%",
                marginLeft: "0.5em",
                marginTop: "0.5em",
              }}
            ></img>
      </div>
      <div class="front__face-photo">
      <img
              src={this.props.item.logo || logo }
              style={{

                width: "90%",
                marginLeft: "0.5em",
                marginTop: "0.5em",

              }}
            ></img>
      </div>
      <div class="front__text">
        <h3 class="front__text-header">{this.props.item.name}</h3>
        <p class="front__text-para"><i class="fas fa-map-marker-alt front-icons"></i>{this.props.item.city}</p>
        <div style={{display:"flex",textAlign: "center",flexWrap:"wrap"}}>
              <p style={{fontSize: "12px", color: "black",width:"50%",border:"1px solid black"}}>{this.props.item.affiliation}</p>
            <p style={{fontSize: "12px", color: "black",width:"50%",border:"1px solid black"}}>{this.props.item.ranking!==null&&this.props.item.ranking!==undefined? this.props.item.ranking.substring(0,20):""}</p>
            <p style={{fontSize: "12px", color: "black",width:"50%",border:"1px solid black"}}>{this.props.item.examAccepted} Accepted</p>
            <p style={{fontSize: "12px", color: "black",width:"50%",border:"1px solid black"}}>Avg. Course Fee {this.props.item.averageCourseFee} </p>
          </div>
        <span class="front__text-hover">Check Details</span>
      </div>
    </div>
    {/* <div class="back">
      <div class="social-media-wrapper">
        <a href="#" class="social-icon"><i class="fab fa-codepen" aria-hidden="true"></i></a> 
        <a href="#" class="social-icon"><i class="fab fa-github-square" aria-hidden="true"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-linkedin-square" aria-hidden="true"></i></a>
         <a href="#" class="social-icon"><i class="fab fa-instagram" aria-hidden="true"></i></a>
      </div>
    </div> */}

  </div>
</div>
      </>
    );
  }
}
