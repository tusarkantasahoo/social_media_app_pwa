import React, { useRef, useState, Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

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
import { getCollegeListByselection,getTopColleges } from "../../api/Api.js";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
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
        affiliation: null,
        courseDuration: null,
        mode: null,
      },
      collegeList: [],
      age: "",
      isCareerMaker: false,
      careerMatcherCounter: 0,
      topCollege:[]
    };
    this.closeCurrentCollege = this.closeCurrentCollege.bind(this);
    this.setCollegeDetails = this.setCollegeDetails.bind(this);
    this.setCityListFromState = this.setCityListFromState.bind(this);
    this.searchCollege = this.searchCollege.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  async searchCollege() {
    var postData = {
      specialization: this.state.selections.specialization,
      state:
        this.state.selections.state !== null &&
        this.state.selections.state !== undefined
          ? this.state.selections.state.toUpperCase()
          : null,
      city:
        this.state.selections.city !== null &&
        this.state.selections.city !== undefined
          ? this.state.selections.city.toUpperCase()
          : null,
      academictype: "college",
    };
    console.log("post sdas", postData);
    var response = await getCollegeListByselection(postData);
    if (response.status === 200) {
      console.log("College Respose", response);
      this.setState({ collegeList: response.data.response });
    }
  }

  handleChange(event) {
    this.setState({ age: event.target.value });
  }

  render() {
    var careerMatcherTest = [
      {
        question: "Entertain an audience",
        options: ["Hate It", "Dislike it", "Neutra", "Like it", "Love it"],
      },
      {
        question: "Estimate the value of items for an insurance policy",
        options: ["Hate It", "Dislike it", "Neutra", "Like it", "Love it"],
      },
      {
        question: "Examine artifacts left behind by previous civilizations",
        options: ["Hate It", "Dislike it", "Neutra", "Like it", "Love it"],
      },
      {
        question: "Find support resources for families in need",
        options: ["Hate It", "Dislike it", "Neutra", "Like it", "Love it"],
      },
      {
        question: "Help a client make business decisions",
        options: ["Hate It", "Dislike it", "Neutra", "Like it", "Love it"],
      },
    ];

    return (
      <>
        {this.state.isCareerMaker ? (
          <>
            <button onClick={() => this.setState({ isCareerMaker: false })}>
              Back
            </button>
            <div
              style={{
                width: "100%",
                backgroundColor: "#1da1f2",
                marginTop: "2em",
                height: "5em",
              }}
            >
              <p
                style={{ color: "white", fontWeight: "bold", fontSize: "22px" }}
              >
                Would You Like to..
              </p>
            </div>
{this.state.careerMatcherCounter!==careerMatcherTest.length?(
  <div
  style={{
    border: "1px solid black",
    marginTop: "2em",
    width: "60%",
    marginLeft: "20%",
  }}
>
  <p style={{ fontSize: "30px" }}>
    {careerMatcherTest[this.state.careerMatcherCounter].question}
  </p>
  {careerMatcherTest[this.state.careerMatcherCounter].options.map(
    (item, id) => {
      return (
        <div
          onClick={() => {
            this.setState({
              careerMatcherCounter:
                this.state.careerMatcherCounter + 1,
            });
          }}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "5px",
          }}
        >
          <p>{item}</p>
        </div>
      );
    }
  )}
  <div
    style={{
      border: "1px solid black",
      padding: "10px",
      margin: "5px",
      textAlign: "center",
      cursor: "pointer",
    }}
  >
    <p
      onClick={() => {
        this.setState({
          careerMatcherCounter: this.state.careerMatcherCounter + 1,
        });
      }}
    >
      Skip
    </p>
  </div>
</div>


):(<>
<div style={{textAlign: "center",marginTop:"1em"}}>
<p style={{fontSize: "25px"}}>Your Response Says you will     be a good Engineer</p>
</div>

</>)}

          
          
          </>
        ) : (
          <>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Career Tools</p>
            <div style={{ display: "flex",marginBottom: "3em"}}>
              <div style={{ marginLeft: "3em" }}>
                <img
                  src={collegePredictor}
                  style={{ height: "3em", width: "3em" }}
                ></img>
                <br></br>
                College Predictor
              </div>
              <div
                onClick={() => {
                  this.setState({ isCareerMaker: true });
                }}
                style={{ marginLeft: "3em", cursor: "pointer" }}
              >
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
            {this.state.currentCollege === null ? (
              <>
                <FormControl sx={{ m: 1, minWidth: 160 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Specialization
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.selections.specialization}
                    label="specialization"
                    style={{ width: "200px" }}
                    onChange={(e) => {
                      this.setState({
                        selections: {
                          specialization: e.target.value,
                          state: this.state.selections.state || null,
                          city: this.state.selections.city || null,
                          avgFee: null,
                        },
                      });
                    }}
                  >
                    <MenuItem value="">Specialization</MenuItem>
                    {specializationsList.map((item, id) => {
                      return <MenuItem value={item}>{item}</MenuItem>;
                    })}
                  </Select>
                </FormControl>

                <FormControl
                  sx={{ m: 1, minWidth: 160 }}
                  style={{ marginLeft: "1em" }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    State
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.selections.state}
                    label="specialization"
                    style={{ width: "200px" }}
                    onChange={(e) => {
                      this.setCityListFromState(e.target.value);
                      this.setState({
                        selections: {
                          specialization:
                            this.state.selections.specialization || null,
                          state: e.target.value,
                          city: null,
                          avgFee: null,
                        },
                      });
                    }}
                  >
                    <MenuItem value="">State</MenuItem>
                    {stateArray.map((item, id) => {
                      return <MenuItem value={item.name}>{item.name}</MenuItem>;
                    })}
                  </Select>
                </FormControl>

                <FormControl
                  sx={{ m: 1, minWidth: 160 }}
                  style={{ marginLeft: "1em" }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.selections.city}
                    label="specialization"
                    style={{ width: "200px" }}
                    onChange={(e) => {
                      this.setState({
                        selections: {
                          specialization:
                            this.state.selections.specialization || null,
                          state: this.state.selections.state,
                          city: e.target.value,
                          avgFee: null,
                        },
                      });
                    }}
                  >
                    <MenuItem value="">City</MenuItem>
                    {this.state.cityList.map((item, id) => {
                      return <MenuItem value={item.name}>{item.name}</MenuItem>;
                    })}
                  </Select>
                </FormControl>

                <FormControl
                  sx={{ m: 1, minWidth: 160 }}
                  style={{ marginLeft: "1em" }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Affiliation
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.selections.affiliation}
                    label="Affiliation"
                    style={{ width: "200px" }}
                    onChange={(e) => {
                      this.setState({
                        selections: {
                          specialization: this.state.selections.specialization||null,
        state: this.state.selections.state||null,
        city: this.state.selections.city||null,
        avgFee: null,
        affiliation: e.target.value,
        courseDuration: this.state.selections.courseDuration||null,
        mode: this.state.selections.mode||null,
                        },
                      });
                    }}
                  >
                    <MenuItem value="">Affiliation</MenuItem>
                    <MenuItem value="AICTE">AICTE</MenuItem>
                    <MenuItem value="UGC">UGC</MenuItem>
                    <MenuItem value="state">STATE</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  sx={{ m: 1, minWidth: 160 }}
                  style={{ marginLeft: "1em" }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Duration
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.selections.duration}
                    label="Course Duration"
                    style={{ width: "200px" }}
                    onChange={(e) => {
                      this.setState({
                        selections: {
                          specialization: this.state.selections.specialization||null,
                          state: this.state.selections.state||null,
                          city: this.state.selections.city||null,
                          avgFee: null,
                          affiliation: this.state.selections.affiliation||null,
                          courseDuration: e.target.value,
                          mode: this.state.selections.mode||null,
                        },
                      });
                    }}
                  >
                    <MenuItem value="">Duration</MenuItem>
                    <MenuItem value="1yr">1 Year</MenuItem>
                    <MenuItem value="2yr">2 Years</MenuItem>
                    <MenuItem value="3yr">3 Years</MenuItem>
                    <MenuItem value="4yr">4 Years</MenuItem>
                    <MenuItem value="5yr">5 Years</MenuItem>
                    <MenuItem value="6yr">6 Years</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  sx={{ m: 1, minWidth: 160 }}
                  style={{ marginLeft: "1em" }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    Mode
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.selections.mode}
                    label="Mode"
                    style={{ width: "200px" }}
                    onChange={(e) => {
                      this.setState({
                        selections: {
                          specialization: this.state.selections.specialization||null,
                          state: this.state.selections.state||null,
                          city: this.state.selections.city||null,
                          avgFee: null,
                          affiliation: this.state.selections.affiliation||null,
                          courseDuration:this.state.selections.courseDuration||null,
                          mode: e.target.value,
                        },
                      });
                    }}
                  >
                    <MenuItem value="">Mode</MenuItem>
                    <MenuItem value="online">Online</MenuItem>
                    <MenuItem value="offline">Offline</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  style={{ marginTop: "1em", marginLeft: "1em" }}
                  variant="outlined"
                  onClick={() => this.searchCollege()}
                >
                  Search
                </Button>

                <div style={{ marginBottom: "-1em" }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "22px",
                      marginTop: "1em",
                    }}
                  >
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
                  {this.state.topCollege.map((item, id) => {
                    return (
                      <SwiperSlide>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={"/academic/college/" + item._id}
                        >
                        <CollegeSliderCard
                          item={item}
                          setCollegeDetails={this.setCollegeDetails}
                        />
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {this.state.collegeList.map((item, id) => {
                    return (
                      <div style={{ margin: "1em" }}>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={"/academic/college/" + item._id}
                        >
                          <CollegeSliderCard
                            item={item}
                            setCollegeDetails={this.setCollegeDetails}
                          />
                        </Link>
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
        )}
      </>
    );
  }

  async componentDidMount() {


    var topCollegeResponse = await getTopColleges();
    if(topCollegeResponse.status===200){
      console.log("Data",topCollegeResponse);
      this.setState({topCollege:topCollegeResponse.data.response})
    }

  }
}
