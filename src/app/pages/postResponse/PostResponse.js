import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import {
    getPostById
} from "../../api/Api.js";
import ImagePost from "../../components/posts/ImagePost.js";
import VideoPost from "../../components/posts/VideoPost.js";
import TextPost from "../../components/posts/TextPost.js";
export default class PostResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        postType:null,
        details:{}
    };
  
  }

  

  render() {

    console.log("Window location", window.location.href);
    if(this.state.postType === "image"){
        return (
            <ImagePost props={this.state.details} />
          );
    }
    if(this.state.postType === "video"){
        return (
            <VideoPost props={this.state.details} />
          );
    }
    if(this.state.postType === "text"){
        return (
            <TextPost props={this.state.details} />
          );
    }
    else {
        return(
            <>
            </>
        )
    }
    
  }

  async componentDidMount() {
    console.log("Window location", window.location.href);
    var location = window.location.href;
    var postId = location.split("/")[4];
    console.log("post ID", postId);

    var payload = {
        postId:postId
    }
    var response = await getPostById(payload)
    if(response.status===200){
        console.log("Response ",response)
        if(response.data.response.postType==="image"){
            this.setState({postType:"image",details:response.data.response})
        }
        else if(response.data.response.postType==="video"){
            this.setState({postType:"video",details:response.data.response})
        }
        else if(response.data.response.postType==="text"){
            this.setState({postType:"text",details:response.data.response})
        }
        else{
            this.setState({postType:"null"})
        }
    }
  }
}
