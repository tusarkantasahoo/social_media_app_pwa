import React, { useRef, useState, Component } from "react";
import CollegeDetailsComponent from "../../components/college/CollegeDetailsComponent.js";
import logo from './verified.png';
import {getCollegeById} from "../../api/Api.js";
import banner from "../../../assets/images/bgImg.jpg";
import logoClg from "../../../assets/images/logo.jpg";
export default class CollegeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs:[{ name: "INFO", code: "info" },
      {name: "COURSES & FEES", code: "courses&fees"},
      {name: "ADMISSION", code: "admission"},
      {name: "REVIEWS", code: "review"},
      {name: "CUTOFF", code: "cutoff"},
      {name: "PLACEMENT", code: "placement"},
      {name: "GALLARY", code: "gallary"},
      {name: "FACILITY", code: "facility"},
      {name: "HOSTEL", code: "hostel"},
     ],
     currentTab:{name: "INFO", code: "info"},
     collegeDetails:{}

    };
    this.renderDetailsBySelection = this.renderDetailsBySelection.bind(this);
  }

  renderDetailsBySelection(item){
    console.log("===",item)
    switch(item.code){
      case "info":return ( <CollegeDetailsComponent currentSelection="info" collegeDetails={this.state.collegeDetails} />)
      case "courses&fees":return ( <CollegeDetailsComponent currentSelection="courses&fees" collegeDetails={this.state.collegeDetails} />)
      case "admission":return ( <CollegeDetailsComponent currentSelection="admission" collegeDetails={this.state.collegeDetails} />)
      case "review":return ( <CollegeDetailsComponent currentSelection="review" collegeDetails={this.state.collegeDetails} />)
      case "cutoff":return ( <CollegeDetailsComponent currentSelection="cutoff" collegeDetails={this.state.collegeDetails} />)
      case "placement":return ( <CollegeDetailsComponent currentSelection="placement" collegeDetails={this.state.collegeDetails} />)
      case "gallary":return ( <CollegeDetailsComponent currentSelection="gallary" collegeDetails={this.state.collegeDetails} />)
      case "facility":return ( <CollegeDetailsComponent currentSelection="facility" collegeDetails={this.state.collegeDetails} />)
      case "hostel":return ( <CollegeDetailsComponent currentSelection="hostel" collegeDetails={this.state.collegeDetails} />)

       default :return null
    }
  }

  render() {
    console.log("college datails", this.props.currentCollege);
    var details = this.props.currentCollege;
    return (
      <>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", textAlign: "left" }}>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              College Details
            </p>
          </div>
        </div>
        <div
          // style={{ backgroundImage: `url(${details.banner})`, height: "15em" }}
           style={{ backgroundImage: `url(${banner})`, height: "15em" }}
          
        >
          <div style={{ height: "7em" }}></div>
          <div style={{ display: "flex" }}>
            <div style={{ textAlign: "left" }}>
              <img
                 src={logoClg}
                style={{ height: "8em", width: "8em" }}
              ></img>
            </div>
            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginLeft: "2em",
                  marginTop: "1em",
                  color: "white",
                }}
              >
                {this.state.collegeDetails.name}
              </p>

              <p
                style={{
                  fontSize: "18px",
                  marginLeft: "2em",
                  marginTop: "1em",
                  color: "white",
                }}
              >
                Address : {this.state.collegeDetails.address}
              </p>
            </div>
          </div>
        </div>

        <div style={{ height: "6em",display:"flex",textAlign:"center" }}>
        <div style={{width:"27%"}}>
        <p style={{flexBasis:"26%",marginTop:"1em",marginLeft:"1em",fontWeight:"800",marginBottom:"1px"}}>{this.state.collegeDetails.name} <img src={logo} alt="logo" style={{height:"15px",width:"14px"}} ></img> </p>
        <p style={{flexBasis:"26%",marginLeft:"1em",fontSize:"smaller"}} >College / University</p>
        </div>
        {this.state.tabs.map((item,id)=>{
          if(this.state.currentTab===item){
            
            return(<p onClick={()=> this.setState({currentTab:item})} style={{fontSize: "14px",fontWeight:"bold",marginTop:"1em",cursor:"pointer",color:"blue",marginLeft:"1em"}}>{item.name}</p>)
          }
          else{
            return(<p onClick={()=> this.setState({currentTab:item})} style={{fontSize: "14px",fontWeight:"bold",marginTop:"1em",cursor:"pointer",marginLeft:"1em" }}>{item.name}</p>)
          }
          
        })}

        </div>

 {this.renderDetailsBySelection(this.state.currentTab)}
      </>
    );
  }

  async componentDidMount() {
    console.log("Window location",window.location.href);
    var location = window.location.href;
    var  collegeId = location.split('/')[5];
    console.log("Survey ID",collegeId);
    var postJson = {
      id:collegeId,
    }
    var responseSurvey = await getCollegeById(postJson);

    if (responseSurvey.status === 200) {
      console.log("Response from College", responseSurvey.data.response);
       this.setState({ collegeDetails: responseSurvey.data.response });
    }
  }
  
}
