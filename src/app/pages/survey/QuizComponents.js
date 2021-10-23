import React, { Component } from "react";
import history from "../../pages/history/History.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
      var item = this.props.item
      return(
        <>
        <FormControl component="fieldset">
        <p style={{ fontSize: "22px", fontWeight: "bold" }}>
          {item.quesTit}
        </p>
    
    
            <RadioGroup>
              <div>
                <FormControlLabel
                  onChange={(e) => {
                    this.setState({
                      selectedOption: e.target.value,
                    });
                  }}
                  value={item.option1}
                  control={<Radio color="primary" />}
                  label={item.option1}
                />
              </div>
              <div>
                <FormControlLabel
                  onChange={(e) => {
                    this.setState({
                      selectedOption: e.target.value,
                    });
                  }}
                  value={item.option2}
                  control={<Radio color="primary" />}
                  label={item.option2}
                />
              </div>
              <div>
                <FormControlLabel
                  onChange={(e) => {
                    this.setState({
                      selectedOption: e.target.value,
                    });
                  }}
                  value={item.option3}
                  control={<Radio color="primary" />}
                  label={item.option3}
                />
              </div>
              <div>
                <FormControlLabel
                  onChange={(e) => {
                    this.setState({
                      selectedOption: e.target.value,
                    });
                  }}
                  value={item.option4}
                  control={<Radio color="primary" />}
                  label={item.option4}
                />
              </div>

            </RadioGroup>
      </FormControl>
      <br></br>
      </>
     
      )
       }
}