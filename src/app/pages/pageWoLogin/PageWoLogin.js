import React, { Component } from "react";
import HomeOptions from "../../components/homeOptions/HomeOptions.js"
import HomeSocial from "../../components/homeSocial/HomeSocial.js"
import AppHeader from "../../components/header/AppHeader.js";
import {userReloginCheckToken} from "../../../auth/AuthApi.js";
import UserDetails from "../../pages/userDetails/UserDetails.js";
export default class PageWoLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          width: 0, 
          height: 0 ,
          optionArray:[{name:"Home",code:"home"},{name:"Rooms",code:"rooms"},{name:"Academic",code:"academic"},{name:"Career",code:"career"},,{name:"Forum",code:"Forum"},{name:"Survey",code:"survey"},{name:"Self Help",code:"selfHelp"},{name:"Jobs",code:"jobs"},{name:"Skills",code:"skills"},{name:"Repository",code:"repository"}],
          currentOption:{name:"Home",code:"home"},
          isUserDashboard:false
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.updateOptionOnClick = this.updateOptionOnClick.bind(this);
        this._onClickUserDashboard = this._onClickUserDashboard.bind(this);
      }

  
      _onClickUserDashboard(){
        this.setState({isUserDashboard:!this.state.isUserDashboard});
      }


      
  render() {


    return (
      <>
      <AppHeader updateAuthState = {this.props.updateAuthState} _onClickUserDashboard={this._onClickUserDashboard} isLoggedIn={false} updateRouteToPage={this.props.updateRouteToPage} />
      <div className="container-fluid">
        <div className="row">
          
            <div className="col-2" id="home-options" style={{boxShadow: "4px 10px 8px #dbd8d7",height:`${this.state.height.toString()-60}px`}}> 
            <HomeOptions props={this.state} updateOptionOnClick={this.updateOptionOnClick}/>
            </div>
     
          {this.state.isUserDashboard?(<>
            <div className="col-10" id="home-social">
          <UserDetails _onClickUserDashboard={this._onClickUserDashboard} />
          </div>
          </>):(
            <div className="col-7" id="home-social">
          <HomeSocial props={this.state} isLoggedIn={false}/>
          </div>
          )}
          
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
