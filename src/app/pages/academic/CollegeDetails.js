import React, { useRef, useState, Component } from "react";

export default class CollegeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("college datails", this.props.currentCollege);
    var details = this.props.currentCollege;
    return (
      <>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", textAlign: "left" }}>
            <button onClick={() => this.props.closeCurrentCollege()}>
              Back
            </button>
          </div>
          <div style={{ width: "50%", textAlign: "left" }}>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              College Details
            </p>
          </div>
        </div>

        <div style={{ height: "10em" }}></div>
        <div className="container">
          <div style={{ display: "flex" }}>
            <div style={{ textAlign: "left" }}>
              <img
                src={details.img}
                style={{ height: "10em", width: "20em" }}
              ></img>
            </div>
            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginLeft: "2em",
                  marginTop: "1em",
                }}
              >
                {details.name}
              </p>

              <p
                style={{
                  fontSize: "18px",
                  marginLeft: "2em",
                  marginTop: "1em",
                }}
              >
                Address : {details.address}
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p>{details.affiliation}</p>
            <p>{details.type}</p>

            <p>{details.ranking}</p>
          </div>
          Info
          <p>{details.info}</p>
        </div>
      </>
    );
  }
}
