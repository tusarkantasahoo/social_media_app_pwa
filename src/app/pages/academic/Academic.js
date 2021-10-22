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
import college from "../../../assets/images/academics/icons/college.png";

import school from "../../../assets/images/academics/icons/school.png";

import coaching from "../../../assets/images/academics/icons/coaching.png";

import exams from "../../../assets/images/academics/icons/exam.png";

import courses from "../../../assets/images/academics/icons/course.png";

import studyAbroad from "../../../assets/images/academics/icons/abroad.png";

import books from "../../../assets/images/academics/icons/book.png";

import results from "../../../assets/images/academics/icons/results.png";

import eduLoans from "../../../assets/images/academics/icons/loan.png";

import arrowRight from "../../../assets/images/arrowRight.png";
import CollegePage from "./CollegePage.js";
import history from "../../pages/history/History.js";
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

  renderAcademicAspects() {
    switch (this.state.currentAspect.code) {
      case "college":
        return (
          <CollegePage setCurrentAspectTonull={this.setCurrentAspectTonull} />
        );

      default:
        return null;
    }
  }

  setCurrentAspectTonull() {
    this.setState({ currentAspect: { name: null, code: null } });
  }

  render() {
    console.log("all college", allCollegeData);
    return (
      <>
        {this.state.currentAspect.code === null ? (
          <div className="academic_wrap">
            <div className="d-flex flex-wrap mt-4">
              {this.state.aspects.map((item, index) => {
                return (
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/academic/" + item.code}
                    className="col-sm-12 col-md-5 col-lg-4 px-3 mb-4"
                  >
                    <div className="card academic_card p-3 d-flex flex-column aic text-center"
                      onClick={() => {
                        this.setState({
                          currentAspect: { name: item.name, code: item.code },
                        });
                      }}>
                      <img src={item.img} className="academic_icon"/>
                      <p className="fw-bold mt-2 mb-0 hover_blue">{item.name}</p>
                      <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <>{/* {this.renderAcademicAspects()} */}</>
        )}
      </>
    );
  }
}
