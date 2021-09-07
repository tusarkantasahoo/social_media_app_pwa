import React, { Component } from "react";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import {createSurvey} from "../../api/Api.js";
export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        noOfOptions:2, 
        postText:props.postText,
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        correctOption:"",
        user:JSON.parse(localStorage.getItem(authResponseStoredValue))

    };
    this._onClickSurveySubmit = this._onClickSurveySubmit.bind(this);
  }

  async _onClickSurveySubmit(){
    var optionsArray = [];
    if(this.state.noOfOptions===2){
      optionsArray = [this.state.option1,this.state.option2]
    }
    if(this.state.noOfOptions===3){
      optionsArray = [this.state.option1,this.state.option2,this.state.option3]
    }
    if(this.state.noOfOptions===4){
      optionsArray = [this.state.option1,this.state.option2,this.state.option3,this.state.option4]
    }
    var optionJsonArray =[];
    
    for(var i=0;i<optionsArray.length;i++){
      optionJsonArray.push({
        name:optionsArray[i],
        vote:0
      })
    }

    var surveyPayload={
      title:this.state.postText,
      surveyType:"quiz",
      options:optionJsonArray,
      user:this.state.user.userData,
      answer:this.state.correctOption
    }

    var responsePollSurvey = await createSurvey(surveyPayload)
    if(responsePollSurvey.status === 200){
      console.log("response create survey",responsePollSurvey)
      window.location.reload();
    }
  }

  render() {
      console.log("Quix created");
    return (
      <>
      Quiz Survey
      <div style={{ width: "90%", marginLeft: "5%" }}>
              <input
                value={this.state.postText}
                onChange={(e) => {
                  this.setState({ postText: e.target.value });
                }}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  height: "3em",
                  border: "0.5px solid #1da1f2",
                  outline: "0",
                }}
                placeholder="Survey Name"
              ></input>
            </div>
        <div
              style={{
                width: "90%",
                marginLeft: "5%",
                marginTop: "10px",
                textAlign: "left",
                padding: "10px",
                borderWidth: "thin",
                border: "0.5px solid #bab3a0",
                borderRadius: "10px",
              }}
            >
              <p>Options for Quiz</p>
              <input
                style={{
                  width: "80%",
                  height: "3em",
                  border: "0.5px solid ",
                  outline: "0",
                }}
                value={this.state.option1}

                placeholder="Choice 1"

                onChange={(e) => {
                  this.setState({ option1: e.target.value });
                }}
              ></input>
              <input
                style={{
                  width: "80%",
                  height: "3em",
                  border: "0.5px solid ",
                  outline: "0",
                  marginTop: "1em",
                }}
                value={this.state.option2}
                onChange={(e) => {
                  this.setState({ option2: e.target.value });
                }}
                placeholder="Choice 2"
              ></input>
              {this.state.noOfOptions > 2 ? (
                <>
                  {this.state.noOfOptions === 3 ? (
                    <input
                      style={{
                        width: "80%",
                        height: "3em",
                        border: "0.5px solid ",
                        outline: "0",
                        marginTop: "1em",
                      }}
                      placeholder="Choice 3"
                      value={this.state.option3}
                      onChange={(e) => {
                        this.setState({ option3: e.target.value });
                      }}
                    ></input>
                  ) : (
                    <>
                      <input
                        style={{
                          width: "80%",
                          height: "3em",
                          border: "0.5px solid ",
                          outline: "0",
                          marginTop: "1em",
                        }}
                        value={this.state.option3}
                        placeholder="Choice 3"
                        onChange={(e) => {
                          this.setState({ option3: e.target.value });
                        }}
                      ></input>
                      <input
                        style={{
                          width: "80%",
                          height: "3em",
                          border: "0.5px solid ",
                          outline: "0",
                          marginTop: "1em",
                        }}
                        value={this.state.option4}
                        placeholder="Choice 4"
                        onChange={(e) => {
                          this.setState({ option4: e.target.value });
                        }}
                      ></input>
                    </>
                  )}
                </>
              ) : null}
              {this.state.noOfOptions < 4 ? (
                <p
                  style={{
                    fontSize: "22px",
                    marginTop: "1em",
                    cursor: "pointer",
                    color: "#1da1f2",
                  }}
                  onClick={() =>
                    this.setState({ noOfOptions: this.state.noOfOptions + 1 })
                  }
                >
                  Add more +
                </p>
              ) : null}
            </div>
            <div style={{textAlign: 'left',marginLeft:"3em"}}>
            <p>
            Correct Option
              </p>
              <select
                value={this.state.correctOption}
                style={{
                  height: "3em",
                  width: "90%",
                  borderRadius: "10px",
                  border: "0.5px solid #1da1f2",
                }}
                onChange={(e)=>{
                console.log(e.target.value)
                 this.setState({correctOption : e.target.value})
                }}
              >
                <option value="1" style={{fontSize:"18px"}} >Option 1</option>
                <option value="2" style={{fontSize:"18px"}}>Option 2</option>
                <option value="3" style={{fontSize:"18px"}}>Option 3</option>
                <option value="4" style={{fontSize:"18px"}}>Option 4</option>
              </select>
           
            </div>
             <div style={{ marginTop: "1em" }}>
              <button
                style={{
                  border: "1px solid",
                  backgroundColor: "#1da1f2",
                  fontSize: "18px",
                  color: "white",
                  width: "50%",
                }}
                onClick={() => this._onClickSurveySubmit()}
              >
                Post Survey
              </button>
            </div>
      </>
    )}
}   
            
          