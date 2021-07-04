import React,{ Component } from "react";
import "./SignUp.css";
import DatePicker from 'react-date-picker';
import loginTree from "../../../assets/images/LoginTree.png";
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
        
      }

  render(){
    return (
      <div className="container-fluid" >
        <div className="row" >
          <div className="col-lg-7 col-sm-12" id="namePart-loginfield">
              <div className="row">
          <div className="col-4" >
            <p className="loginpage-welcometext">Welcome to</p>
            <p className="loginpage-monastree">Monastree</p>
            </div>
            <div className="col-3" >
            <img style={{marginTop:"110%",marginLeft:"70%"}} height="340px" width="180px" src={loginTree}></img>
            </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12" id="loginOrSignupPart-loginfield">
            <div className="row">
            <div className="login-top-message">
              <p>Let's Meet the future !</p>
            </div>
           
            <div className="login-box">
              <p className="top-msg-login-box">SignUp in to Monastree</p>
              <form>
                <div className="login-container-username">
                  <input
                    className="signin-inputfield-username"
                    type="text"
                    name="name"
                    placeholder="Email, username or Phone No"
                  />
                </div>
                <div className="login-container-password">
                  <input
                    className="signin-inputfield-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <br></br>
                </div>
                <div className="login-container-confirm-password">
                  <input
                    className="signin-inputfield-password-confirm"
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                  />
                  <br></br>
                </div>
                <div className="signup-datepicker">
                Date of Birth {" "}<DatePicker value={this.state.date} onChange={(e)=>{
                    this.setState({date:e});
                }}/>
                    
                </div>
                <button
                  className="signin-submit-button"
                  type="submit"
                  value="Submit"
                >
                  <p onClick={()=>{this.props.history.push('/signup');}} className="submit-button-text">Sign Up</p>
                </button>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }

}
