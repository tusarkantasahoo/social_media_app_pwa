import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import {
  getSurveyList,
  getSurveyById,
  addResearchComment,
  giveQuizAnswer,
  givePollAnswer,
} from "../../api/Api.js";
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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import QuizComponents from "./QuizComponents.js"
export default class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyDetails: {},
      comment: "",
      surveyId: "",
      selectedOption: "",
      quizQuestion:[]
    };
    this.returnSurveyByType = this.returnSurveyByType.bind(this);
    this._onClickSubmitResearch = this._onClickSubmitResearch.bind(this);
    this._onClickSubmitQuiz = this._onClickSubmitQuiz.bind(this);
    this._onClickSubmitPoll = this._onClickSubmitPoll.bind(this);
    this.updateQuizselect = this.updateQuizselect.bind(this);
  }

  async _onClickSubmitResearch() {
    var user = JSON.parse(localStorage.getItem(authResponseStoredValue));
    var postJson = {
      surveyId: this.state.surveyId,
      user: {
        name: user.userData.name,
        email: user.userData.email,
        id: user.userData._id,
        image: user.userData.userImage,
      },

      comment: this.state.comment,
    };
    var response = await addResearchComment(postJson);

    if (response.status === 200) {
      console.log("Comment added successfully");
      var location = window.location.href;
      var surveyId = location.split("/")[4];
      this.setState({ surveyId: surveyId });
      console.log("Survey ID", surveyId);
      var responseSurvey = await getSurveyById(surveyId);
      if (responseSurvey.status === 200) {
        console.log("Response from survey", responseSurvey.data.response);
        this.setState({ surveyDetails: responseSurvey.data.response });
      }
    }
  }

  async _onClickSubmitQuiz() {
    console.log("Question",this.state.quizQuestion)
    var user = JSON.parse(localStorage.getItem(authResponseStoredValue));

    var postJson = {
      surveyId: this.state.surveyId,
      userData: user.userData,
      response: this.state.quizQuestion,
    };
    var response = await giveQuizAnswer(postJson);

    if (response.status === 200) {
      console.log("Comment added successfully");
      var location = window.location.href;
      var surveyId = location.split("/")[4];
      this.setState({ surveyId: surveyId });
      console.log("Survey ID", surveyId);
      var responseSurvey = await getSurveyById(surveyId);
      if (responseSurvey.status === 200) {
        console.log("Response from survey", responseSurvey.data.response);
        this.setState({ surveyDetails: responseSurvey.data.response });
      }
    }
  }

  async _onClickSubmitPoll() {
    var user = JSON.parse(localStorage.getItem(authResponseStoredValue));
    if (
      this.state.selectedOption.length === 0 ||
      this.state.selectedOption === null ||
      this.state.selectedOption.length === undefined
    ) {
      window.alert("Please select A option");
    }
    var postJson = {
      surveyId: this.state.surveyId,
      user: {
        name: user.userData.name,
        email: user.userData.email,
        id: user.userData._id,
        image: user.userData.userImage,
      },

      optionName: this.state.selectedOption,
    };
    var response = await giveQuizAnswer(postJson);

    if (response.status === 200) {
      console.log("Comment added successfully");
      var location = window.location.href;
      var surveyId = location.split("/")[4];
      this.setState({ surveyId: surveyId });
      console.log("Survey ID", surveyId);
      var responseSurvey = await getSurveyById(surveyId);
      if (responseSurvey.status === 200) {
        console.log("Response from survey", responseSurvey.data.response);
        this.setState({ surveyDetails: responseSurvey.data.response });
      }
    }
  }
  updateQuizselect(data){
    this.setState({quizQuestion: data})
  }

  returnSurveyByType(type) {
    switch (type) {
      case "poll":
        return (
          <>
            <FormControl component="fieldset">
              <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                {this.state.surveyDetails.title}
              </p>
              <RadioGroup>
                {this.state.surveyDetails.options.map((item, id) => {
                  return (
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        onChange={(e) => {
                          this.setState({ selectedOption: e.target.value });
                        }}
                        value={item.name}
                        control={<Radio color="primary" />}
                        label={item.name}
                      />
                      <p style={{ marginTop: "1em" }}>{item.vote} </p>
                    </div>
                  );
                })}
              </RadioGroup>
            </FormControl>
            <br></br>
            <br></br>
            {/* <TextField id="standard-basic" label="Comments" /> */}
            <Button
              onClick={() => {
                this._onClickSubmitPoll();
              }}
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </>
        );

      case "quiz":
        return (
          <>
            {this.state.quizQuestion.map((item, id) => {
              return (
                <>
               <QuizComponents updateQuizselect={this.updateQuizselect} quizQuestion={this.state.quizQuestion} item={item} id={id}/>
                </>
              );
            })}

            {/* <TextField id="standard-basic" label="Comments" /> */}
            <br></br>
            <br></br>
            <Button
              onClick={() => {
                this._onClickSubmitQuiz();
              }}
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </>
        );

      case "research":
        return (
          <>
            {this.state.surveyDetails.researchQuestion.map((item, id) => {
              return (
                <>
                  <FormControl component="fieldset">
                  <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                      {item.quesTit}
                    </p>
                    <p style={{ fontSize: "22px", fontWeight: " " }}>
                      {item.answer}
                    </p>
                  </FormControl>
                  <br></br>
                </>
              );
            })}

            <TextField
              onChange={(e) => {
                this.setState({ comment: e.target.value });
              }}
              id="standard-basic"
              label="Answer"
            />
            <br></br>
            <br></br>
            <Button
              onClick={() => this._onClickSubmitResearch()}
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
            <p
              style={{ marginTop: "1em", fontSize: "23px", fontWeight: "450" }}
            >
              {this.state.surveyDetails.comments.length} Answer
            </p>
            {this.state.surveyDetails.comments !== null &&
            this.state.surveyDetails.comments !== undefined ? (
              <>
                {this.state.surveyDetails.comments.map((item, id) => {
                  return (
                    <>
                      <div
                        style={{
                          borderRadius: "1em",
                          padding: "0.5em",
                          boxShadow: "1px 1px 1px  #dbd8d7",
                          marginTop: "1em",
                        }}
                      >
                        <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                          {item.user.name}
                        </p>
                        <p style={{ fontSize: "15px", marginTop: "-1em" }}>
                          {item.comment}
                        </p>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </>
        );
      default:
        return <></>;
    }
  }

  render() {
    console.log(this.state.comment);
    console.log(this.state.selectedOption);
    console.log("Window location", window.location.href);
    return (
      <>
        <div class="container">
          <br></br>
          {this.state.surveyDetails.surveyType !== null &&
          this.state.surveyDetails.surveyType !== undefined ? (
            <>{this.returnSurveyByType(this.state.surveyDetails.surveyType)}</>
          ) : null}
        </div>
      </>
    );
  }

  async componentDidMount() {
    console.log("Window location", window.location.href);
    var location = window.location.href;
    var surveyId = location.split("/")[4];
    this.setState({ surveyId: surveyId });
    console.log("Survey ID", surveyId);
    var responseSurvey = await getSurveyById(surveyId);
    if (responseSurvey.status === 200) {
      console.log("Response from survey", responseSurvey.data.response);
      this.setState({ surveyDetails: responseSurvey.data.response,quizQuestion: responseSurvey.data.response.quizQuestion });
    }
  }
}
