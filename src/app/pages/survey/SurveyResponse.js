import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import { getSurveyList,getSurveyById } from "../../api/Api.js";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SurveyMovingCard from "../../components/surveyCard/SurveyMovingCard.js";
import "../../../App.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
        surveyDetails:{}
    };
    this.returnSurveyByType = this.returnSurveyByType.bind(this);
  }


  returnSurveyByType(type){
switch(type){
    case "poll": return (
        <>
          <FormControl component="fieldset">
          <p style={{fontSize:"22px",fontWeight:"bold"}}>{this.state.surveyDetails.title}</p>
      <RadioGroup  >
      {this.state.surveyDetails.options.map((item,id)=>{
           return (
            <FormControlLabel value={item} control={<Radio color="primary" />} label={item} />
           ) 
        })}
       
      </RadioGroup>
    </FormControl>
    <br></br>
    <br></br>
    <TextField id="standard-basic" label="Comments" />
    <br></br>
    <br></br>
    <Button variant="outlined" color="primary">
Submit
</Button>
       
        </>

         
    )

    case "quiz": return (
        <>
      <FormControl component="fieldset">
      <p style={{fontSize:"22px",fontWeight:"bold"}}>{this.state.surveyDetails.title}</p>
      <RadioGroup  >
      {this.state.surveyDetails.options.map((item,id)=>{
           return (
            <FormControlLabel value={item} control={<Radio color="primary" />} label={item} />
           ) 
        })}
       
      </RadioGroup>
    </FormControl>
    <br></br>
    <br></br>
    <TextField id="standard-basic" label="Comments" />
    <br></br>
    <br></br>
    <Button variant="outlined" color="primary">
Submit
</Button>
       
        </>

         
    )

    case "research": return (
        <>
           <FormControl component="fieldset">
          <p style={{fontSize:"22px",fontWeight:"bold"}}>{this.state.surveyDetails.title}</p>
    </FormControl>
    <br></br>
    <br></br>
    <TextField id="standard-basic" label="Answer" />
    <br></br>
    <br></br>
    <Button variant="outlined" color="primary">
Submit
</Button>
        </>

         
    )
    default:
        return null;
}
  }

  render() {
    console.log("Window location",window.location.href);
    return (
      <>
        <div class="container">
            <br></br>
        {this.returnSurveyByType(this.state.surveyDetails.surveyType)}
        </div>

     
      </>
    );
  }

  async componentDidMount() {
    console.log("Window location",window.location.href);
    var location = window.location.href;
    var  surveyId = location.split('/')[4];
    console.log("Survey ID",surveyId);
    var responseSurvey = await getSurveyById(surveyId);
    if (responseSurvey.status === 200) {
      console.log("Response from survey", responseSurvey.data.response);
      this.setState({ surveyDetails: responseSurvey.data.response });
    }
  }
}
