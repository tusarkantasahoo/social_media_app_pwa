import React,{ Component } from "react";
import "./LoginPage.css";
import "../../../App.css"
import loginTree from "../../../assets/images/LoginTree.png";
import Login from "../../../auth/Login.js";
import {authResponseStoredValue} from "../../../utils/Constant.js";
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password : ""
    };

    this._onClickLoginSubmit= this._onClickLoginSubmit.bind(this);
  }

async _onClickLoginSubmit(){
   var postJsonLogin={
    username:this.state.username,
    password:this.state.password
   }
   console.log("Logindata",postJsonLogin)
    var loginResponse = await Login(postJsonLogin);
    if(loginResponse.status===200){
      console.log("loginResponse:",loginResponse);
      localStorage.setItem(authResponseStoredValue,JSON.stringify(loginResponse.data));
       this.props.updateAuthState(loginResponse.data);
    }
 

  }
  render(){
    console.log(this.props);
    return (

      <div className="container-fluid" style={{marginTop:"10%",width:"90%",boxShadow: "15px 15px 10px #dbd8d7"}}>
 
        <div className="row" >
          <div className="col-lg-7 col-sm-12" id="namePart-loginfield">
              <div className="row">
          <div className="col-4" >
            <p className="loginpage-welcometext">Welcome to</p>
            <p className="loginpage-monastree">Monastree</p>
            </div>
            <div className="col-3" style={{textAlign:"right"}} >
            {/* <img style={{marginTop:"80%",marginLeft:"70%"}} height="340px" width="180px" src={loginTree}></img> */}
            </div>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12" id="loginOrSignupPart-loginfield">
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
                    onChange={(e) => {this.setState({username:e.target.value})}}
                  />
                </div>
                <div className="login-container-password">
                  <input
                    className="signin-inputfield-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {this.setState({password:e.target.value})}}
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
