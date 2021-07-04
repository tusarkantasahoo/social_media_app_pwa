import React,{ Component } from "react";
import "./LoginPage.css";
import loginTree from "../../../assets/images/LoginTree.png";
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-sm-12" id="namePart-loginfield">
              <div className="row">
          <div className="col-4" >
            <p className="loginpage-welcometext">Welcome to</p>
            <p className="loginpage-monastree">Monastree</p>
            </div>
            <div className="col-3" style={{textAlign:"right"}} >
            <img style={{marginTop:"80%",marginLeft:"70%"}} height="340px" width="180px" src={loginTree}></img>
            </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12" id="loginOrSignupPart-loginfield">
            <div className="login-top-message">
              <p>Let's Meet the future !</p>
            </div>
            <div className="login-box">
              <p className="top-msg-login-box">Login in to Monastree</p>
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
                <button
                  className="signin-submit-button"
                  type="submit"
                  value="Submit"
                >
                  <p onClick={()=>{this.props.history.push('/signup');}} className="submit-button-text">Login</p>
                </button>
              </form>
              <div className="container-forgotten-password">
                <p className="forgotten-password-text">Forgotten password?</p>
              </div>
              {/* <p onClick={()=>{this.props.history.push('/signup');}}>Login</p> */}
              <div
                className="container-line-after-forgetpassword"
                style={{ textAlign: "center" }}
              >
                <hr style={{height:"1"}}className="line-after-forgettpass"></hr>
              </div>
              <div className="container-new-account">
                <p className="text-new-account" onClick={()=>{
                  this.props.history.push("/signup")
                }}>New Account?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
