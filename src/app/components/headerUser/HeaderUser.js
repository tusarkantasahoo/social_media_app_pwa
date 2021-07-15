import React, { Component } from "react";
import userImage from "../../../assets/images/professionalImage.png";
import {authResponseStoredValue} from "../../../utils/Constant.js";
export default class HeaderUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserClicked:false
        };
      }
       
  render() {
    var userDetails = JSON.parse(localStorage.getItem(authResponseStoredValue));
    
    return (
        <>
        <div className="row"  onClick={()=>this.setState({isUserClicked:!this.state.isUserClicked})}>
            <div className="col-6" style={{textAlign:"right"}}>
                <img src={userImage} style={{  borderRadius: "60px",marginRight:"-17px",marginTop:"5px"}} height="40px" width="45px" />
            </div>
            <div className="col-6" style={{textAlign:"left"}}>
                <p style={{fontSize:"18px",marginTop:"10px",color:"white"}}>{userDetails.userData.name}</p>
                {this.state.isUserClicked?(
             <div style={{textAlign:"left",backgroundColor:"#f2f0e9",border:"0.5px solid black"}}>
             <p >Email:{userDetails.userData.email}</p>
             <p>Phone:{userDetails.userData.phone}</p>
             <p>Other details:</p>
             <p style={{fontWeight:"bold"}} onClick={()=>{
                 localStorage.setItem(authResponseStoredValue,null);
                    // this.props.props.history.push("/")
                    this.props.updateAuthState(null);
             }}>Signout</p>
         </div>
        ):null}
            </div>

           
       
        </div>
        
        </>
    )}
}