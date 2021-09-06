import React, { Component } from "react";
import "./LoginPage.css";
import "../../../App.css"
import loginTree from "../../../assets/images/LoginTree.png";
import graduate from "../../../assets/images/graduates.jpg";
import degree from "../../../assets/images/degree.jpg";
import { Login, signinUserFromSocialSites } from "../../../auth/AuthApi.js";
import { authResponseStoredValue } from "../../../utils/Constant.js";
import { facebookProvider, googleProvider } from "../../../config/authMethod.js";
import socialMediaAuth from "../../../service/auth.js";
import googlelogin from "../../../assets/images/googlelogin.png";
import history from '../../pages/history/History.js';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this._onClickLoginSubmit = this._onClickLoginSubmit.bind(this);
    this.handelOnClick = this.handelOnClick.bind(this);
  }

  async _onClickLoginSubmit() {
    var postJsonLogin = {
      username: this.state.username,
      password: this.state.password
    }
    console.log("Logindata", postJsonLogin)
    var loginResponse = await Login(postJsonLogin);
    if (loginResponse.status === 200) {
      console.log("loginResponse:", loginResponse);
      if (loginResponse.data.message === "Login successful") {
        localStorage.setItem(authResponseStoredValue, JSON.stringify(loginResponse.data));
        this.props.updateAuthState(loginResponse.data);
        history.push("/");
        window.location.reload();
      }
      else {
        console.log("Unsuccessful", loginResponse.data);
        alert(loginResponse.data.message)
      }

    }
  }
  async handelOnClick(provider) {
    const res = await socialMediaAuth(provider)
    console.log(res);
    if (res !== null && res !== undefined) {
      var userData = {
        name: res.displayName,
        email: res.email,
        phone: res.phoneNumber,
        image: res.photoURL,
        dataFrom: "google"
      }

      console.log("user data", userData);

      var responseForUser = await signinUserFromSocialSites(userData);
      if (responseForUser.status === 200) {
        console.log("loginResponse:", responseForUser);
        if (responseForUser.data.message === "Login successful") {
          localStorage.setItem(authResponseStoredValue, JSON.stringify(responseForUser.data));
          this.props.updateAuthState(responseForUser.data);
          history.push("/home");
          window.location.reload();

        }
        else {
          console.log("Unsuccessful", responseForUser.data);
          alert(responseForUser.data.message)
        }

      }
    }
  }
  render() {
    console.log(this.props);
    return (

      <div className="login_container d-flex jcc aic w-100 h-100 pr">
       
          <img className="login_bg w-100 h-100" src={graduate}></img>
        
        <div className="container glassy">
          <div className="d-flex" >
            {/* <div className="col-lg-6 col-sm-12" id="namePart-loginfield">
              <div className="d-flex">
                <div className="col-4" >
                  <p className="loginpage-welcometext">Welcome to</p>
                  <p className="loginpage-monastree">Monastree</p>
                </div>
                <div className="col-4" style={{ textAlign: "right" }} >
                  <img style={{ marginTop: "80%", marginLeft: "70%" }} height="340px" width="180px" src={loginTree}></img>
                </div>
              </div>
            </div> */}
            <div className="col-sm-12" id="loginOrSignupPart-loginfield">
              <div className="login-top-message">
                <p>Let's Meet the future !</p>
              </div>
              <div className="login-box">
                <p className="top-msg-login-box">Login in to Monastree</p>

                <div className="login-container-username">
                  <input
                    className="signin-inputfield-username"
                    type="text"
                    name="name"
                    placeholder="Email, username or Phone No"
                    onChange={(e) => { this.setState({ username: e.target.value }) }}
                  />
                </div>
                <div className="login-container-password">
                  <input
                    className="signin-inputfield-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                  />
                  <br></br>
                </div>
                <button
                  className="signin-submit-button"
                  //  type="submit"
                  //  value="Submit"
                  onClick={this._onClickLoginSubmit}
                >
                  <p className="submit-button-text">Login</p>
                </button>

                <div className="d-flex" style={{ marginTop: "20px", cursor: "pointer", width: "80%", marginLeft: "5%", border: "0.25px solid 1da1f2" }}
                  onClick={() => this.handelOnClick(googleProvider)}
                >
                  <div className="col-4" style={{ textAlign: "center", border: "0.01px solid #1da1f2" }}>
                    <img src={googlelogin} style={{ height: "45px", width: "45px" }}></img>
                  </div>


                  <div className="col-8" style={{ textAlign: "left", backgroundColor: "#1da1f2" }}>
                    <p style={{ color: "white", marginTop: "0.5em" }}>Sign in with Google</p>
                  </div>

                </div>


                <div className="container-forgotten-password">
                  <p className="forgotten-password-text" onClick={() => this.props.updateRouteToPage("forgotPassword")}>Forgotten password?</p>
                </div>
                {/* <p onClick={()=>{this.props.history.push('/signup');}}>Login</p> */}
                <div
                  className="container-line-after-forgetpassword"
                  style={{ textAlign: "center" }}
                >
                  <hr style={{ height: "1" }} className="line-after-forgettpass"></hr>
                </div>
                <div className="container-new-account">
                  <p className="text-new-account" onClick={() => {
                    // this.props.history.push("/signup")
                    console.log("props", this.props);
                    this.props.updateRouteToPage("signup")
                  }}>New Account?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

}
