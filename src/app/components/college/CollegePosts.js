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
      var item = this.props.item;
      return(<>
         {/* <div
        style={{
          textAlign: "left",
          border: "0.5px solid #d4d1c5",
          marginTop: "10px",
          borderRadius: "15px",
          padding: "10px",
          width:"40em"
        }}
      >
        <div className="d-flex flex-row">
          <div className="comment_icon_top">
            <img
              src={item.img}
              height="50px"
              width="50px"
              style={{ borderRadius: "25px" }}
            ></img>
          </div>
          <div className="ms-3">
            <h6 className="fw-bold mb-0">
            Tusar
            </h6>
            <p style={{ fontSize: "15px" }}>
              {/* {this.props.props.user.email} 
              29/08/2021
            </p>
          </div>
  
        </div>
        <p>{item.title}</p>
        <div className="image-field-for-posts" onClick={() => { this.props.handelNewsClick(); this.props.setNewsItem(this.props.props); }}>
          <img className="mx_height_100 w-100" src={item.img}></img>
        </div>
      </div> */}


      <div class="container content">
      <div class="card" style={{width: "18rem;"}}>
      <h5 class="card-title"><img style={{width: "70px" , height: '70px'}} src={logo}/></h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <img class="card-img-top" src={item.img} alt="Card image cap"/>
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