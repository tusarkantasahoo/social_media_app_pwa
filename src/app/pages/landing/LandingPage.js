import React, { Component } from "react";
import HomeOptions from "../../components/homeOptions/HomeOptions.js"
import HomeSocial from "../../components/homeSocial/HomeSocial.js"
export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }

      
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3" id="home-options" style={{border:"0.5px solid black",height:`${this.state.height.toString()}px`}}> 
          <HomeOptions />
          </div>
          <div className="col-9" id="home-social">
          <HomeSocial />
          </div>
        </div>
        </div>
    );
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    console.log("dimensions",this.state.width,this.state.height)
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
}
