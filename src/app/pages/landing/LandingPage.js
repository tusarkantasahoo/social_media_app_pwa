import React, { Component } from "react";
import HomeOptions from "../../components/homeOptions/HomeOptions.js"
import HomeSocial from "../../components/homeSocial/HomeSocial.js"
import AppHeader from "../../components/header/AppHeader.js"
export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          width: 0, 
          height: 0 ,
          optionArray:[{name:"Home",code:"home"},{name:"Rooms",code:"rooms"},{name:"Academic",code:"academic"},{name:"Career",code:"career"},,{name:"Forum",code:"Forum"},{name:"Survey",code:"survey"},{name:"Self Help",code:"selfHelp"},{name:"Jobs",code:"jobs"},{name:"Skills",code:"skills"},{name:"Repository",code:"repository"}],
          currentOption:{name:"Home",code:"home"},
          isOptionMenuClicked:true
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.updateOptionOnClick = this.updateOptionOnClick.bind(this);
        this.toggleOptionMenu = this.toggleOptionMenu.bind(this);
      }


      
  render() {
    return (
      <>
      <AppHeader toggleOptionMenu={this.toggleOptionMenu}/>
      <div className="container-fluid">
        <div className="row">
          {this.state.isOptionMenuClicked?(
            <div className="col-2" id="home-options" style={{boxShadow: "4px 10px 8px #dbd8d7",height:`${this.state.height.toString()-60}px`}}> 
            <HomeOptions props={this.state} updateOptionOnClick={this.updateOptionOnClick}/>
            </div>
          ):null}
          
          <div className={this.state.isOptionMenuClicked?"col-7":"col-9"} id="home-social">
          <HomeSocial props={this.state}/>
          </div>
        </div>
        </div>
    </>
    );
  }
  updateOptionOnClick(item){
        this.setState({
          currentOption:item
        });
      }
  toggleOptionMenu(){
    this.setState({
      isOptionMenuClicked:!this.state.isOptionMenuClicked
    })
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
