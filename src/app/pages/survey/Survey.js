import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import {getSurveyList} from "../../api/Api.js";
import { Swiper, SwiperSlide } from "swiper/react";

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
      survey:[]
    };
  }


  render() {
          const breakpoints = [{
        width:1200,itemsToShow:4
    }]
    const { items } = this.state;
    return (
      <>
        <div class="container">
        {/* <p style={{fontSize:"22px"}}>User Survey</p> */}
        {/* <div style={{height:"10em"}}></div> */}
          <p style={{fontSize:"22px",fontWeight:"600"}}>Trending Survey</p>
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
        if(responseSurveyList.status === 200){
            console.log("Response from survey",responseSurveyList)
            this.setState({survey:responseSurveyList.data.response})
        }
  }
}
