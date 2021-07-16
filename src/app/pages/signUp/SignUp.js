import React,{ Component } from "react";
import "./SignUp.css";
import DatePicker from 'react-date-picker';
import loginTree from "../../../assets/images/LoginTree.png";
import {Signup} from "../../../auth/AuthApi.js";
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          userFullName:"",
          email:"",
          phone : "",
          password:"",
          dob: new Date()
        };
        

       this.createAccountForUser = this.createAccountForUser.bind(this); 
      }

  
      async createAccountForUser(){
        var modifiedDob = this.state.dob.toString().split(" ");
        
        console.log(modifiedDob)
        modifiedDob = modifiedDob[2]+"/"+modifiedDob[1]+"/"+modifiedDob[3];
        var signupUserData = {
        name: this.state.userFullName,
        email: this.state.email,
        phone: this.state.phone,
        dob: modifiedDob,
        password :this.state.password
        }
        console.log("createAccountForUser",signupUserData)

        var responseSignupUser = await Signup(signupUserData);

        if(responseSignupUser.status === 200){
          console.log("User registered Succcessfully");
          console.log("Server response",responseSignupUser)
          alert("user registered successfully");
          this.props.updateRouteToPage("login")
        }
      }

  render(){
    return (
      <div className="container-fluid" style={{marginTop:"10%",width:"90%",boxShadow: "15px 15px 10px #dbd8d7"}}>
        <div className="row" >
          <div className="col-lg-7 col-sm-12" id="namePart-loginfield">
              <div className="row">
          <div className="col-4" >
            <p className="loginpage-welcometext">Welcome to</p>
            <p className="loginpage-monastree">Monastree</p>
            </div>
            <div className="col-3" >
            {/* <img style={{marginTop:"110%",marginLeft:"70%"}} height="340px" width="180px" src={loginTree}></img> */}
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
              <div className="login-container-username">
                  <input
                    className="signin-inputfield-username"
                    type="text"
                    name="name"
                    placeholder="User full name"
                    onChange={(e) => {this.setState({userFullName:e.target.value})}}
                  />
                  <br></br>
                </div>
                <div className="login-container-password">
                  <input
                    className="signin-inputfield-password"
                    type="text"
                    name="name"
                    placeholder="Email or username "
                    onChange={(e) => {this.setState({email:e.target.value})}}
                  />
                </div>
                <div className="login-container-password">
                  <input
                    className="signin-inputfield-password"
                    type="text"
                    name="name"
                    placeholder="phone number"
                    onChange={(e) => {this.setState({phone:e.target.value})}}
                  />
                  <br></br>
                </div>
                <div className="login-container-password">
                  <input
                    className="signin-inputfield-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      this.setState({password: e.target.value})}}
                  />
                  <br></br>
                </div>
                <div className="login-container-confirm-password">
                  <input
                    className="signin-inputfield-password-confirm"
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      this.setState({password: e.target.value})}}
                  />
                  <br></br>
                </div>
                <div className="signup-datepicker" >
                Date of Birth {" "}<DatePicker value={this.state.dob} onChange={(e)=>{
                    this.setState({dob:e});
                    console.log("dat",e.toString().split(" ")[0]);
                }}/>
                    
                </div>
                <button
                  className="signin-submit-button"
                  type="submit"
                  value="Submit"
                >
                  <p onClick={()=>{
                    
                      this.createAccountForUser();
                    
                    }} className="submit-button-text">Sign Up</p>
                </button> 
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }

}
