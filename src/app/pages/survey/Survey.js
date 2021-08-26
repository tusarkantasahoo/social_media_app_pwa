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
// import Swiper core and required modules
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
    return (
      <>
        <div class="container">
          {user !== null && user !== undefined ? (
            <>
              <p style={{ fontSize: "22px" }}>User Survey</p>
              <div style={{ height: "20em" }}>
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
                  {this.state.userSurvey.map((item, id) => {
                    return (
                      <SwiperSlide>
                        <div></div>
                        <SurveyMovingCard item={item} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </>
          ) : null}

          <p style={{ fontSize: "22px", fontWeight: "600" }}>Trending Survey</p>
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
            {this.state.survey.map((item, id) => {
              return (
                <SwiperSlide>
                  <div></div>
                  <SurveyMovingCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
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
      var responseSurveyListUser = await getSurveyCratedByUser(user.userData);
      if (responseSurveyList.status === 200) {
        console.log("Response from survey", responseSurveyListUser);
        this.setState({ userSurvey: responseSurveyListUser.data.response });
      }
    }
  }
}
