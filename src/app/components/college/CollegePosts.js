import React, { useRef, useState, Component } from "react";
import banner from "./banner.jpg";
import logo from "./logo.jpg";



export default class CollegePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log("props",this.props.item);
      var item = this.props.item;
      return(<>
      <div class="container content">
      <div class="card ps-3">
      {/* <h5 class="card-title"><img style={{width: "70px" , height: '70px'}} src={logo}/></h5> */}
      <p style={{fontSize:"25px"}}>{item.title}</p>
      <p class="card-text">{item.description}</p>
  <img class="card-img-top" src={item.image} alt="Card image cap"/>
  <div class="card-body">
    {/* <h5 class="card-title"> */}

        <i class="far fa-heart"></i>
        <i class="far fa-comment"></i>
        <i class="far fa-share-square"></i>
    {/* </h5> */}
    
  </div>
</div>

      </div>
      </>)
  }
}