import React, { useRef, useState, Component } from "react";
import CollegeDetailsComponent from "../../components/college/CollegeDetailsComponent.js";
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
     currentTab:{name: "INFO", code: "info"}

    };
    this.renderDetailsBySelection = this.renderDetailsBySelection.bind(this);
  }

  renderDetailsBySelection(item){
    console.log("===",item)
    switch(item.code){
      case "info":return ( <CollegeDetailsComponent currentSelection="info" collegeDetails={this.props.currentCollege} />)
      case "courses&fees":return ( <CollegeDetailsComponent currentSelection="courses&fees" collegeDetails={this.props.currentCollege} />)
      case "admission":return ( <CollegeDetailsComponent currentSelection="admission" collegeDetails={this.props.currentCollege} />)
      case "review":return ( <CollegeDetailsComponent currentSelection="review" collegeDetails={this.props.currentCollege} />)
      case "cutoff":return ( <CollegeDetailsComponent currentSelection="cutoff" collegeDetails={this.props.currentCollege} />)
      case "placement":return ( <CollegeDetailsComponent currentSelection="placement" collegeDetails={this.props.currentCollege} />)
      case "gallary":return ( <CollegeDetailsComponent currentSelection="gallary" collegeDetails={this.props.currentCollege} />)
      case "facility":return ( <CollegeDetailsComponent currentSelection="facility" collegeDetails={this.props.currentCollege} />)
      case "hostel":return ( <CollegeDetailsComponent currentSelection="hostel" collegeDetails={this.props.currentCollege} />)

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
          style={{ backgroundImage: `url(${details.banner})`, height: "15em" }}
        >
          <div style={{ height: "7em" }}></div>
          <div style={{ display: "flex" }}>
            <div style={{ textAlign: "left" }}>
              <img
                src={details.logo}
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
                {details.name}
              </p>

              <p
                style={{
                  fontSize: "18px",
                  marginLeft: "2em",
                  marginTop: "1em",
                  color: "white",
                }}
              >
                Address : {details.address}
              </p>
            </div>
          </div>
        </div>

        <div style={{ height: "10em",display:"flex" }}>

        {this.state.tabs.map((item,id)=>{
          if(this.state.currentTab===item){
            return(<p onClick={()=> this.setState({currentTab:item})} style={{fontSize: "18px",fontWeight:"bold",margin:"1em",cursor:"pointer",color:"blue"}}>{item.name}</p>)
          }
          else{
            return(<p onClick={()=> this.setState({currentTab:item})} style={{fontSize: "18px",fontWeight:"bold",margin:"1em",cursor:"pointer" }}>{item.name}</p>)
          }
          
        })}

        </div>

 {this.renderDetailsBySelection(this.state.currentTab)}
      </>
    );
  }
}
