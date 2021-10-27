import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import { getSurveyList, getSurveyCratedByUser } from "../../api/Api.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SurveyMovingCard from "../../components/surveyCard/SurveyMovingCard.js";
import "../../../App.css";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { withStyles } from "@material-ui/core/styles/";
import SwiperCore, { Pagination, Navigation } from "swiper/core";



export default class Survey extends Component {
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
      survey: [],
      userSurvey: [],
      isTrending: true
    };
  }

  render() {
    const breakpoints = [
      {
        width: 1200,
        itemsToShow: 4,
      },
    ];
    const { items } = this.state;
    var user = JSON.parse(localStorage.getItem(authResponseStoredValue));
    const { classes } = this.props;
    return (
      <>
        <div class="container">
          <Tabs className="indicator" centered value={0}>
            <Tab onClick={() => this.setState({ isTrending: true })} disableRipple label="Trending Survey" className="trnd_survey_tab" style={{ color: this.state.isTrending ? "#0089FF" : "black" }} />
            <Tab onClick={() => this.setState({ isTrending: false })} disableRipple label="My Survey" className="trnd_survey_tab" style={{ color: this.state.isTrending ? "black" : "#0089FF" }} />
          </Tabs>

          {/* <div style={{ display: "flex" }}>
            <p onClick={() => this.setState({ isTrending: true })} className="trnd_survey_tab" >
              Trending Survey
            </p>

            <p onClick={() => this.setState({ isTrending: false })} className="trnd_survey_tab" >
              My Survey
            </p>
          </div> */}
          {this.state.isTrending ? (
            <div>
              {this.state.survey.map((item, id) => {
                return (
                  <div style={{ marginTop: '1em' }}>
                    <SurveyMovingCard item={item} />
                  </div>


                );
              })}

            </div>
          ) : (
            <div>
              {this.state.userSurvey.map((item, id) => {
                return (

                  <div style={{ marginTop: '1em' }}>
                    <SurveyMovingCard item={item} />
                  </div>


                );
              })}

            </div>
          )}
        </div>




      </>
    );
  }

  async componentDidMount() {
    var responseSurveyList = await getSurveyList();
    if (responseSurveyList.status === 200) {
      console.log("Response from survey", responseSurveyList);
      this.setState({ survey: responseSurveyList.data.response });
    }

    var user = JSON.parse(localStorage.getItem(authResponseStoredValue));
    if (user !== null && user !== undefined) {
      var payload = {
        userId:user.userData._id
      }
      var responseSurveyListUser = await getSurveyCratedByUser(payload);
      if (responseSurveyListUser.status === 200) {
        console.log("Response from survey", responseSurveyListUser);
        this.setState({ userSurvey: responseSurveyListUser.data.response });
      }
    }
  }
}

// const styles = theme => ({
//   indicator: {
//     backgroundColor: "white"
//   }
// });