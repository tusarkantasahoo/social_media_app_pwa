import React, { useRef, useState, Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
SwiperCore.use([Pagination, Navigation]);

export default class Academic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: "item #1" },
        { id: 2, title: "item #2" },
        { id: 3, title: "item #3" },
        { id: 4, title: "item #4" },
        { id: 5, title: "item #5" },
      ],
      isTools: true,
    };
  }

  render() {
    console.log("all college", allCollegeData);
    return (
      <>
        <div className="container">
          Career Tools
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "3em" }}>
              <img
                src={collegePredictor}
                style={{ height: "3em", width: "3em" }}
              ></img>
              <br></br>
              College Predictor
            </div>
            <div style={{ marginLeft: "3em" }}>
              <img src={career} style={{ height: "3em", width: "3em" }}></img>
              <br></br>
              Career Maker
            </div>
            <div style={{ marginLeft: "3em" }}>
              <img src={grades} style={{ height: "3em", width: "3em" }}></img>
              <br></br>
              Grade Calculator
            </div>
            <div style={{ marginLeft: "3em" }}>
              <img src={grades} style={{ height: "3em", width: "3em" }}></img>
              <br></br>
              Area of Study
            </div>
          </div>
          <div style={{ display: "flex" ,marginTop: "3em"}}>
            <select
              style={{
                height: "3em",
                width: "10em",
                borderRadius: "10px",
                border: "0.5px solid #1da1f2",
                marginLeft: "3em"
              }}
              value="specialization"
            >
              <option value="" style={{ fontSize: "18px" }}>
                specialization
              </option>
              <option value="btech" style={{ fontSize: "18px" }}>
                B. TECH
              </option>
              <option value="mtech" style={{ fontSize: "18px" }}>
                M. TECH
              </option>
              <option value="mba" style={{ fontSize: "18px" }}>
                MBA
              </option>
            </select>

            <select
              style={{
                height: "3em",
                width: "10em",
                borderRadius: "10px",
                border: "0.5px solid #1da1f2",
                marginLeft: "3em"
              }}
              value="specialization"
            >
              <option value="" style={{ fontSize: "18px" }}>
                State
              </option>
              <option value="westbengal" style={{ fontSize: "18px" }}>
                West Bengal
              </option>
              <option value="uttarpradesh" style={{ fontSize: "18px" }}>
                Uttar Pradesh
              </option>
            </select>

            <select
              style={{
                height: "3em",
                width: "10em",
                borderRadius: "10px",
                border: "0.5px solid #1da1f2",
                marginLeft: "3em"
              }}
              value="specialization"
            >
              <option value="" style={{ fontSize: "18px" }}>
                Avg. Fee
              </option>
              <option value="5-10" style={{ fontSize: "18px" }}>
                5-10L
              </option>
              <option value="mtech" style={{ fontSize: "18px" }}>
                10-15L
              </option>
              <option value="mba" style={{ fontSize: "18px" }}>
                15-20L
              </option>
            </select>
          </div>
        </div>
        <div style={{width:"80%",border: "1px solid black",borderRadius:"10px",marginLeft:"10%",marginTop:"3em"}}>
        <p style={{fontWeight: "bold",fontSize: "22px"}}>Top Colleges</p>
        </div>
        
        <Swiper
          height="20em"
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {allCollegeData.map((item, id) => {
            return (
              <SwiperSlide>
                <div></div>
                <CollegeSliderCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper
          height="20em"
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {allCollegeData.map((item, id) => {
            return (
              <SwiperSlide>
                <div></div>
                <CollegeSliderCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  }
}
