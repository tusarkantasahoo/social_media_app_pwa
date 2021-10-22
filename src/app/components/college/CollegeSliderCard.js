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

  limitString(str) {
    if (str.length > 20) {
      return str.substring(0, 20) + ".."
    }
    else { return str }

  }

  getRandomIng(val) {
    if (val % 2 === 0) {
      return collegeBanner
    }
    else { return clgBuild }
  }

  render() {
    return (
      <>
        <div className="card pr shadow">
          <div style={{ backgroundImage: `url(${this.getRandomIng(this.props.id)})` }} className="card_banner">
            <div className="ovrlay"></div>
            <p className="crdBnrTxt">{this.props.item.name.toUpperCase()}</p>
          </div>
          <img src={logo} className="crd_logo pr mb-2" />
          <div className="p-3">
            <marquee>
              <p style={{ fontSize: "12px", fontWeight: "500", color: "#116191" }}>
                {this.limitString(this.props.item.affiliation)}
              </p>
            </marquee>
            <div className="d-flex flex-wrap jcsb">
              <div className="text-center">
                <p className="clgCrdtxt">20,000</p>
                <p className="text-secondary fs-7">Admission Fee</p>
              </div>

              <div className="text-center">
                <p className="clgCrdtxt">50,000</p>
                <p className="text-secondary fs-7">Tution Fee</p>
              </div>

              <div className="text-center">
                <p className="clgCrdtxt">4 years</p>
                <p className="text-secondary fs-7">Duration</p>
              </div>

            </div>
          </div>
          <div style={{ height: "1.5em", textAlign: "center" }}>
            <p style={{ fontSize: "11px", color: "#bb9898" }}>ADMISSION 2021 REVIEWS COURSEFEES</p>
          </div>

          <div className="d-flex flex-wrap jcsb b_top">
            <div className="col-sm-6 col-md-6 bg-success text-center shadow-sm py-2">
              <p className="text-light mb-0 fw-bold">APPLY NOW</p>
            </div>
            <div className="col-sm-6 col-md-6 text-center shadow-sm py-2">
              <p className="fw-bold mb-0 text-dark">GET DETAILS</p>
            </div>
          </div>

        </div>
      </>
    );
  }
}
