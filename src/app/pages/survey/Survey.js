import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import {getSurveyList} from "../../api/Api.js";
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
          <Carousel breakPoints = {breakpoints}>
            {this.state.survey.map((item) => (
                <>
              
              <div>
              <p>{item.title}</p>
              <br></br>
              <p >{item.surveyType}</p>
              <br></br>
              </div>
              
              </>
            ))}
          </Carousel>
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
