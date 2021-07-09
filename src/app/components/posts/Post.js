import React, { Component } from "react";
import userImage from "../../../assets/images/professionalImage.png";
import "./Post.css";
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
    render() {

      return (<>
      <div  style={{textAlign: 'left',border: '0.5px solid #d4d1c5',marginTop:"10px",borderRadius:"15px",padding:"10px"}}>
      <div className="row" >
          <div className="col-1">
            <img src={userImage} height="35px" width="35px" style={{borderRadius:"25px"}}></img>
          </div>
          <div className="col-10">
          <p style={{fontSize:"22px",marginLeft:"-3%"}}>{this.props.props.title}</p>
          </div>
          <div className="col-1">
          <p style={{fontSize:"18px",cursor:"pointer"}}>Edit</p>
          </div>
      </div>
      <p style={{fontSize:"16px"}}>{this.props.props.description}</p>
      <div onClick={()=>{
        this.props.handelNewsClick();
        this.props.setNewsItem(this.props.props);
        }} style={{textAlign:"center"}}>
      <img className="image-field-for-posts" src={this.props.props.image}></img>
      </div>
      
      </div>
      </>)
    }}