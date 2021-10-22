import React, { useRef, useState, Component } from "react";
import CollegeDetailsComponent from "../../components/college/CollegeDetailsComponent.js";
import logo from './verified.png';
import { getCollegeById } from "../../api/Api.js";
import banner from "../../../assets/images/bgImg.jpg";
import logoClg from "../../../assets/images/logo.jpg";
export default class CollegeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [{ name: "INFO", code: "info" },
      { name: "COURSES & FEES", code: "courses&fees" },
      { name: "ADMISSION", code: "admission" },
      { name: "REVIEWS", code: "review" },
      { name: "CUTOFF", code: "cutoff" },
      // {name: "PLACEMENT", code: "placement"},
      // {name: "GALLARY", code: "gallary"},
      // {name: "FACILITY", code: "facility"},
      // {name: "HOSTEL", code: "hostel"},
      { name: "ADD POST", code: "collegepost" },
      ],
      currentTab: { name: "INFO", code: "info" },
      collegeDetails: {}

    };
    this.renderDetailsBySelection = this.renderDetailsBySelection.bind(this);
  }

  renderDetailsBySelection(item) {
    console.log("===", item)
    switch (item.code) {
      case "info": return (<CollegeDetailsComponent currentSelection="info" collegeDetails={this.state.collegeDetails} />)
      case "courses&fees": return (<CollegeDetailsComponent currentSelection="courses&fees" collegeDetails={this.state.collegeDetails} />)
      case "admission": return (<CollegeDetailsComponent currentSelection="admission" collegeDetails={this.state.collegeDetails} />)
      case "review": return (<CollegeDetailsComponent currentSelection="review" collegeDetails={this.state.collegeDetails} />)
      case "cutoff": return (<CollegeDetailsComponent currentSelection="cutoff" collegeDetails={this.state.collegeDetails} />)
      case "placement": return (<CollegeDetailsComponent currentSelection="placement" collegeDetails={this.state.collegeDetails} />)
      case "gallary": return (<CollegeDetailsComponent currentSelection="gallary" collegeDetails={this.state.collegeDetails} />)
      case "facility": return (<CollegeDetailsComponent currentSelection="facility" collegeDetails={this.state.collegeDetails} />)
      case "hostel": return (<CollegeDetailsComponent currentSelection="hostel" collegeDetails={this.state.collegeDetails} />)
      case "collegepost": return (<CollegeDetailsComponent currentSelection="collegepost" collegeDetails={this.state.collegeDetails} />)

      default: return null
    }
  }

  render() {
    console.log("college datails", this.props.currentCollege);
    var details = this.props.currentCollege;
    return (
      <>

        <div style={{ backgroundImage: `url(${banner})`, height: "18em" }} className="pr">
          <div style={{ height: "7em" }}></div>
          <div style={{ display: "flex" }}>
            <div className="d-flex aib">
              <img src={logoClg} style={{ height: "10em", width: "10em", marginLeft: "1em" }} />
              <div className="px-4">
                <p className="text-light fw-bold">{this.state.collegeDetails.name !== null & this.state.collegeDetails.name !== undefined ? this.state.collegeDetails.name.toUpperCase() : ""} <img src={logo} alt="logo" style={{ height: "20px", width: "20px" }} ></img> </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#f3f3f3" }}>
          <div style={{ height: "6em", display: "flex", backgroundColor: "white" }}>

            {this.state.tabs.map((item, id) => {
              if (this.state.currentTab === item) {

                return (<p onClick={() => this.setState({ currentTab: item })} style={{ fontSize: "16px", fontWeight: "500", marginTop: "1em", cursor: "pointer", color: "blue", marginLeft: "1em" }}>{item.name}</p>)
              }
              else {
                return (<p onClick={() => this.setState({ currentTab: item })} style={{ fontSize: "16px", fontWeight: "500", marginTop: "1em", cursor: "pointer", marginLeft: "1em" }}>{item.name}</p>)
              }

            })}

          </div>


          {this.renderDetailsBySelection(this.state.currentTab)}
        </div>
      </>
    );
  }

  async componentDidMount() {
    console.log("Window location", window.location.href);
    var location = window.location.href;
    var collegeId = location.split('/')[5];
    console.log("Survey ID", collegeId);
    var postJson = {
      id: collegeId,
    }
    var responseSurvey = await getCollegeById(postJson);

    if (responseSurvey.status === 200) {
      console.log("Response from College", responseSurvey.data.response);
      this.setState({ collegeDetails: responseSurvey.data.response });
    }
  }

}
