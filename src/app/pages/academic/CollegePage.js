import React, { useRef, useState, Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../../../App.css";
import {
  allCollegeData,
  specializationsList,
  stateArray,
  cityWithState,
  topCollege,
} from "./TestData.js";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import CollegeSliderCard from "../../components/college/CollegeSliderCard";
import collegePredictor from "./asset/school.png";
import career from "./asset/career.png";
import grades from "./asset/grades.png";
import CollegeDetails from "./CollegeDetails.js";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default class CollegePage extends Component {
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
      currentCollege: null,
      cityList: [],
      selections: {
        specialization: null,
        state: null,
        city: null,
        avgFee: null,
      },
    };
    this.closeCurrentCollege = this.closeCurrentCollege.bind(this);
    this.setCollegeDetails = this.setCollegeDetails.bind(this);
    this.setCityListFromState = this.setCityListFromState.bind(this);
  }

  closeCurrentCollege() {
    this.setState({ currentCollege: null });
  }

  setCollegeDetails(item) {
    this.setState({ currentCollege: item });
  }

  setCityListFromState(item) {
    console.log("item", item);
    var cityForstate = [];
    console.log(cityWithState);
    for (var i = 0; i < cityWithState.length; i++) {
      if (item === cityWithState[i].state) {
        console.log("====");
        cityForstate.push(cityWithState[i]);
      }
    }

    this.setState({ cityList: cityForstate });
  }

  render() {
    console.log("all college", allCollegeData);

    return (
      <>
        {this.state.currentCollege === null ? (
          <>
            <div className="container">
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                Career Tools
              </p>
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
                  <img
                    src={career}
                    style={{ height: "3em", width: "3em" }}
                  ></img>
                  <br></br>
                  Career Maker
                </div>
                <div style={{ marginLeft: "3em" }}>
                  <img
                    src={grades}
                    style={{ height: "3em", width: "3em" }}
                  ></img>
                  <br></br>
                  Grade Calculator
                </div>
                <div style={{ marginLeft: "3em" }}>
                  <img
                    src={grades}
                    style={{ height: "3em", width: "3em" }}
                  ></img>
                  <br></br>
                  Area of Study
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "3em" }}>
                <select
                  style={{
                    height: "3em",
                    width: "10em",
                    borderRadius: "10px",
                    border: "0.5px solid #1da1f2",
                    marginLeft: "3em",
                  }}
                  value="specialization"
                >
                  <option value="" style={{ fontSize: "18px" }}>
                    specialization
                  </option>
                  {specializationsList.map((item, id) => {
                    return (
                      <option value="btech" style={{ fontSize: "18px" }}>
                        {item}
                      </option>
                    );
                  })}
                </select>

                <select
                  style={{
                    height: "3em",
                    width: "10em",
                    borderRadius: "10px",
                    border: "0.5px solid #1da1f2",
                    marginLeft: "3em",
                  }}
                  onChange={(e) => {
                    this.setCityListFromState(e.target.value);
                  }}
                >
                  <option value="" style={{ fontSize: "18px" }}>
                    State
                  </option>
                  {stateArray.map((item, id) => {
                    return (
                      <option value={item.name} style={{ fontSize: "18px" }}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>

                <select
                  style={{
                    height: "3em",
                    width: "10em",
                    borderRadius: "10px",
                    border: "0.5px solid #1da1f2",
                    marginLeft: "3em",
                  }}
                  value="specialization"
                >
                  <option value="" style={{ fontSize: "18px" }}>
                    City
                  </option>
                  {this.state.cityList.map((item, id) => {
                    return (
                      <option value="btech" style={{ fontSize: "18px" }}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>

                <select
                  style={{
                    height: "3em",
                    width: "10em",
                    borderRadius: "10px",
                    border: "0.5px solid #1da1f2",
                    marginLeft: "3em",
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
     <div style={{ marginBottom: "-1em" }}>
              <p style={{ fontWeight: "bold", fontSize: "22px",marginTop:"1em" }}>
               Top Colleges
              </p>
              </div>

            <Swiper
              height="20em"
              slidesPerView={3}
              spaceBetween={5}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
              {topCollege.map((item, id) => {
                return (
                  <SwiperSlide>
                    <CollegeSliderCard
                      item={item}
                      setCollegeDetails={this.setCollegeDetails}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {allCollegeData.map((item, id) => {
                return (
                  <div style={{ margin: "1em" }}>
                    <CollegeSliderCard
                      item={item}
                      setCollegeDetails={this.setCollegeDetails}
                    />
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <CollegeDetails
            currentCollege={this.state.currentCollege}
            closeCurrentCollege={this.closeCurrentCollege}
          />
        )}
      </>
    );
  }
}
