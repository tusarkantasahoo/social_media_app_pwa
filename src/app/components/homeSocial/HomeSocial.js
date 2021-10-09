import React, { Component } from "react";
import Home from "../../pages/home/Home.js";
import Rooms from "../../pages/rooms/Rooms.js"
export default class HomeSocial extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.renderSocialPage = this.renderSocialPage.bind(this);
  }



    render() {
      console.log("height in social",this.state.height);
      return (
       <>
       <div className="container_custom noBar" style={{overflow:"scroll",height:`${this.state.height-55}px`}}>
 
      {this.renderSocialPage(this.props.props.currentOption)}
        </div>
       </>
      );
    }
    renderSocialPage(currentOption){
      switch(currentOption.code){
        case "home": return <Home isLoggedIn={this.props.isLoggedIn} />;
        case "rooms":return <Rooms isLoggedIn={this.props.isLoggedIn}/>;
        
        default:
      }
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