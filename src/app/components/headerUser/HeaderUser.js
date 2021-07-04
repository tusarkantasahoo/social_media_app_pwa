import React, { Component } from "react";
import userImage from "../../../assets/images/professionalImage.jpg"
export default class HeaderUser extends Component {
  render() {
    return (
        <>
        <div className="row">
            <div className="col-6" style={{textAlign:"right"}}>
                <img src={userImage} style={{  borderRadius: "60px",marginRight:"-17px",marginTop:"5px"}} height="40px" width="45px" />
            </div>
            <div className="col-6" style={{textAlign:"left"}}>
                <p style={{fontSize:"18px",marginTop:"10px",color:"white"}}>Tusar Kanta Sahoo</p>
            </div>

        </div>
        </>
    )}
}