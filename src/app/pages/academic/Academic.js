import React, { useRef, useState, Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../../../App.css";
import { allCollegeData } from "./TestData.js";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import CollegeSliderCard from "../../components/college/CollegeSliderCard";
import collegePredictor from "./asset/school.png";
import career from "./asset/career.png";
import grades from "./asset/grades.png";
// install Swiper modules
import college from "../../../assets/images/academics/college.png";
import school from "../../../assets/images/academics/school.png";
import coaching from "../../../assets/images/academics/education.png";
import exams from "../../../assets/images/academics/exam.png";
import courses from "../../../assets/images/academics/courses.png";
import studyAbroad from "../../../assets/images/academics/studying.png";
import books from "../../../assets/images/academics/books.png";
import results from "../../../assets/images/academics/analysis.png";
import eduLoans from "../../../assets/images/academics/strategy.png";
import CollegePage from "./CollegePage.js";
import history from '../../pages/history/History.js';
SwiperCore.use([Pagination, Navigation]);

export default class Academic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTools: true,
      aspects: [
        { name: "College", code: "college", img: college },
        { name: "Schools", code: "schools", img: school },
        { name: "Coaching", code: "coaching", img: coaching },
        { name: "Exams", code: "exams", img: exams },
        { name: "Courses", code: "courses", img: courses },
        { name: "StudyAbroad", code: "studyAbroad", img: studyAbroad },
        { name: "Books", code: "books", img: books },
        { name: "Results", code: "results", img: results },
        { name: "Educational Loans", code: "educationalLoans", img: eduLoans },
      ],
      currentAspect: { name: null, code: null },
    };

    this.renderAcademicAspects = this.renderAcademicAspects.bind(this);
    this.setCurrentAspectTonull = this.setCurrentAspectTonull.bind(this);
  }

  renderAcademicAspects(){
    switch (this.state.currentAspect.code){
      case "college":return (<CollegePage setCurrentAspectTonull={this.setCurrentAspectTonull} />)

      default :return null
    }
  }

  setCurrentAspectTonull(){
    this.setState({currentAspect: { name: null, code: null }})
  }

  render() {
    console.log("all college", allCollegeData);
    return (
      <>
      {this.state.currentAspect.code===null?(
         <div className="container">
         <p style={{fontSize: "22px",marginBottom:"2em",fontWeight:"bold"}}>Academics</p>
         <div style={{ display: "flex" }}>
           {this.state.aspects.map((item, index) => {
             return (
              <Link
              to={"/academic/" + item.code}
            >
               <div onClick={()=>{
               this.setState({currentAspect: { name: item.name, code: item.code }});
               
              
              }
               
               } style={{ marginLeft: "3em",height:"5em",width:"5em",cursor: "pointer"}}>
                 <img
                   src={item.img}
                   style={{ height: "5em", width: "5em" }}
                 ></img>
                 <br></br>
                 {item.name}
               </div>
               </Link>
             );
           })}
         </div>
       </div>
      ):(



        <>
        {/* {this.renderAcademicAspects()} */}
 
        </>

      )

      }
       
      </>
    );
  }
}
