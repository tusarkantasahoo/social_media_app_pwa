import React, { Component } from "react";
import HomeOptions from "../../components/homeOptions/HomeOptions.js"
import HomeSocial from "../../components/homeSocial/HomeSocial.js"
import AppHeader from "../../components/header/AppHeader.js"
export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }

      
  render() {
    return (
      <>
      <AppHeader />
      <div className="container-fluid">
        
        <div className="row">
          <div className="col-2" id="home-options" style={{boxShadow: "4px 10px 8px #dbd8d7",height:`${this.state.height.toString()}px`}}> 
          <HomeOptions />
          </div>
          <div className="col-10" id="home-social">
          <HomeSocial />
          </div>
        </div>
        </div>
    </>
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
