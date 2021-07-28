import React, { Component } from "react";
import userImage from "../../../assets/images/professionalImage.png";
import "./Post.css";
import ImagePost from "./ImagePost.js";
import VideoPost from "./VideoPost.js";
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
    render() {
      switch(this.props.props.postType){
        case "image":return(
          <ImagePost props={this.props.props} handelNewsClick={this.props.handelNewsClick} setNewsItem={this.props.setNewsItem} />
        )

        case "video":return(
          <VideoPost props={this.props.props} handelNewsClick={this.props.handelNewsClick}/>
        )



       default :return null
      }

    }
  
  }