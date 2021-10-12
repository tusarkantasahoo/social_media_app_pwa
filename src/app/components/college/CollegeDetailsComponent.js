import React, { useRef, useState, Component } from "react";
import banner from "./banner.jpg";
import logo from "./logo.jpg";
import CollegePosts from "./CollegePosts.js";
import { getCollegePosts,createCollegePosts } from "../../api/Api.js";
import { StyledDropZone } from "react-drop-zone";
import img_thumb from "../../../assets/images/img_thumb.png";
import trophy from "../../../assets/images/collegeDetails/trophy.png";
import badge1 from "../../../assets/images/collegeDetails/medal.png";
import badge2 from "../../../assets/images/collegeDetails/police-badge.png";
import badge3 from "../../../assets/images/collegeDetails/badge.png";
import info from "../../../assets/images/collegeDetails/info.png";
import foundation from "../../../assets/images/collegeDetails/foundation.png";
import check from "../../../assets/images/collegeDetails/checked.png";
import address from "../../../assets/images/collegeDetails/pin.png";
import phone from "../../../assets/images/collegeDetails/phone.png";
import website from "../../../assets/images/collegeDetails/globe.png";

import mail from "../../../assets/images/collegeDetails/mail.png";
import notPin from "../../../assets/images/collegeDetails/notPin.png";
export default class CollegeDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collegePosts: [],
      image: "",
      postTitle:"",
      postDescription:""
    };
    this.uploadImage = this.uploadImage.bind(this);
    this.convertImageFileToBase64 = this.convertImageFileToBase64.bind(this);
    this.createPostForCollege = this.createPostForCollege.bind(this);
  }
  convertImageFileToBase64(file) {
    console.log("convertImageFileToBase64=======");
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  async uploadImage(file) {
    this.setState({ file: file });
    console.log("base64 image");
    const base64Img = await this.convertImageFileToBase64(file);
    console.log("base64 image", base64Img);
    if (base64Img) {
      this.setState({ image: base64Img });
    }
  }
  async createPostForCollege(){
    var payload = {
      image:this.state.image,
      title:this.state.postTitle,
      collegeid:"614f15898769c3a13c32a344",
      description:this.state.postDescription,
      addedBy:"",
      collegename:"AVC",

    }



    console.log("Payload for Post",payload);

    var response = await createCollegePosts(payload);
    if(response.status === 200){
      console.log("Crested",response);
    }
  }

  render() {
    var collegePosts = [
      {
        title:
          "pace is full of surprises and wonders. The beauty is unparalleled and sometimes we come across such a beauty that we can't help but be mesmerised and ascribe some meaning to the resplendent celestial structure.Trust NASA to send such pictures our way! The space agency regularly posts photos it clicks via its social media channels. And on of its photos has us go gaga again.",
        img: banner,
      },
      { title: "Upcoming batch next month", img: logo },
    ];
    console.log("Inside College Details component", this.props);

    var currentSelection = this.props.currentSelection;
    var details = this.props.collegeDetails;
    if (currentSelection === "info") {
      return (
        <>
          <div
            className="container-fluid"
            style={{ display: "flex", marginTop: "1em" }}
          >
            <div
              style={{
                boxShadow: "10px 10px 10px  #dbd8d7",
                padding: "10px",
                backgroundColor: "white",
              }}
            >
              <p style={{ fontSize: "22px" }}>About</p>

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <img
                  src={trophy}
                  style={{ hwight: "15px", width: "30px" }}
                ></img>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    marginLeft: "1em",
                  }}
                >
                  Ranked 1 Business School
                </p>
              </div>

              <div style={{ marginTop: "1em" }}>
                <p
                  style={{
                    fontSize: "16px",
                    marginTop: "1em",
                    marginLeft: "1em",
                    fontWeight: "500",
                  }}
                >
                  BADGES
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {/* <img src={trophy} style={{hwight:"2emx",width:"2em",marginLeft: "1em"}}></img> */}
                  <img
                    src={badge1}
                    style={{ hwight: "2em", width: "2em", marginLeft: "1em" }}
                  ></img>
                  <img
                    src={badge2}
                    style={{ hwight: "2em", width: "2em", marginLeft: "1em" }}
                  ></img>
                  <img
                    src={badge3}
                    style={{ hwight: "2em", width: "2em", marginLeft: "1em" }}
                  ></img>
                </div>
              </div>
              <div style={{}}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "1em",
                  }}
                >
                  <div style={{ width: "20%" }}>
                    {" "}
                    <img
                      src={info}
                      style={{
                        height: "18px",
                        width: "18px",
                        marginLeft: "1em",
                      }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", textAlign: "left" }}>
                    {" "}
                    <p style={{ fontSize: "15px" }}>
                      One of the Reputed college in Eastern India
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "1em",
                  }}
                >
                  <div style={{ width: "20%" }}>
                    {" "}
                    <img
                      src={info}
                      style={{
                        height: "18px",
                        width: "18px",
                        marginLeft: "1em",
                      }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", textAlign: "left" }}>
                    {" "}
                    <p style={{ fontSize: "15px" }}>Affiliation</p>
                    <p style={{ fontSize: "15px" }}>{details.affiliation}</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "1em",
                  }}
                >
                  <div style={{ width: "20%" }}>
                    {" "}
                    <img
                      src={foundation}
                      style={{
                        height: "18px",
                        width: "18px",
                        marginLeft: "1em",
                      }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", textAlign: "left" }}>
                    {" "}
                    <p style={{ fontSize: "15px" }}>Foundation</p>
                    <p style={{ fontSize: "15px" }}>{details.affiliation}</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "1em",
                  }}
                >
                  <div style={{ width: "20%" }}>
                    {" "}
                    <img
                      src={check}
                      style={{
                        height: "18px",
                        width: "18px",
                        marginLeft: "1em",
                      }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", textAlign: "left" }}>
                    {" "}
                    <p style={{ fontSize: "15px" }}>Nature</p>
                    <p style={{ fontSize: "15px" }}>{details.collegeType}</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "1em",
                  }}
                >
                  <div style={{ width: "20%" }}>
                    {" "}
                    <img
                      src={address}
                      style={{
                        height: "18px",
                        width: "18px",
                        marginLeft: "1em",
                      }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", textAlign: "left" }}>
                    {" "}
                    <p style={{ fontSize: "15px" }}>Address</p>
                    <p style={{ fontSize: "15px" }}>{details.address}</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "1em",
                  }}
                >
                  <div style={{ width: "20%" }}>
                    {" "}
                    <img
                      src={phone}
                      style={{
                        height: "18px",
                        width: "18px",
                        marginLeft: "1em",
                      }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", textAlign: "left" }}>
                    {" "}
                    <p style={{ fontSize: "15px" }}>Contact</p>
                    <p style={{ fontSize: "15px" }}>{details.contact}</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "1em",
                  }}
                >
                  <div style={{ width: "20%" }}>
                    {" "}
                    <img
                      src={website}
                      style={{
                        height: "18px",
                        width: "18px",
                        marginLeft: "1em",
                      }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", textAlign: "left" }}>
                    <p style={{ fontSize: "15px" }}>{details.website}</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "1em",
                  }}
                >
                  <div style={{ width: "20%" }}>
                    {" "}
                    <img
                      src={website}
                      style={{
                        height: "18px",
                        width: "18px",
                        marginLeft: "1em",
                      }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", textAlign: "left" }}>
                    <p style={{ fontSize: "15px" }}>{details.website}</p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "1em",
                  }}
                >
                  <div style={{ width: "20%" }}>
                    {" "}
                    <img
                      src={mail}
                      style={{
                        height: "18px",
                        width: "18px",
                        marginLeft: "1em",
                      }}
                    ></img>
                  </div>
                  <div style={{ width: "80%", textAlign: "left" }}>
                    <p style={{ fontSize: "15px" }}>{details.email}</p>
                  </div>
                </div>
              </div>


              <div style={{ textAlign: "center" ,marginTop:"1em",backgroundColor:"#b0d9eb"}}>
                <div style={{display: "flex", flexWrap: "wrap",textAlign: "center"}}>  <p style={{ fontSize: "22px",fontWeight:"600",marginLeft:"25%" }}>Notice Board</p>
                <img src={notPin} style={{width:"20px",height:"20px",marginLeft: "1em"}}></img></div>
              
                <marquee direction="up" scrollamount="2" height="300px">
                  <h5>{details.description}</h5>
                </marquee>
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  marginLeft: "1em",
                }}
              >
                Posts
              </p>{
                this.state.collegePosts.length>0?(
                  <>
                      {this.state.collegePosts.map((item, id) => {
                return (
                  <CollegePosts
                    handelNewsClick={this.props.handelNewsClick}
                    item={item}
                  />
                );
              })}
                  </>
                ):(

           <div class="card" style={{width: "41rem",margin:"1em",boxShadow: "4px 10px 8px  #dbd8d7",padding:"1em",padding:"1em"}}> 
          
Add Post By going to Add Post Section in Top right corner
                </div> 
                )
              }

   
            </div>
          </div>
        </>
      );
    } else if (currentSelection === "courses&fees") {
      return (
        <>
          <div className="container">
            <p>{details.courseAndFees}</p>
          </div>
        </>
      );
    } else if (currentSelection === "admission") {
      return (
        <>
          <div className="container">
            <p>{details.admission}</p>
          </div>
        </>
      );
    } else if (currentSelection === "review") {
      return (
        <>
          <div className="container">
            {/* <p>{details.review}</p> */}
            <div className="col-md-12">
              <div className="row">
                <div
                  class="col-md-3"
                  style={{
                    boxShadow: "rgb(219, 216, 215) 0px 2px 3px",
                    height: "621px",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <h4>Ranked 1 Business School</h4>
                  </div>

                  <div style={{}}>
                    <ul>
                      <a href="#">affiliation</a>
                    </ul>
                    <ul>
                      <a href="#">Foundation</a>
                    </ul>
                    <ul>
                      <a href="#">Nature</a>
                    </ul>
                    <ul>
                      <a href="#">Address</a>
                    </ul>
                    <ul>
                      <a href="#">079-987-878</a>
                    </ul>
                    <section id="block-views-whats-new-block-2">
                      <h3
                        className="block-title"
                        style={{
                          background:
                            "-webkit-linear-gradient(top, #3a96ce, #266184)",

                          color: "#ffffff",
                        }}
                      >
                        Notice Board
                      </h3>
                      <div style={{ backgroundColor: "aliceblue" }}>
                        <marquee direction="up" scrollamount="2" height="300px">
                          <ul>
                            <li>Wellcone to the site</li>
                            <li>welcome to the website and have a nice day</li>
                          </ul>
                        </marquee>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="col-md-9">
                  <div
                    id="carouselMultiItemExample"
                    className="carousel slide carousel-dark text-center"
                    data-mdb-ride="carousel"
                  >
                    {/* Controls */}

                    {/* Inner */}
                    <div className="carousel-inner py-4">
                      {/* Single item */}
                      <div className="carousel-item active">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="card">
                                <img
                                  src="https://mdbootstrap.com/img/new/standard/nature/181.jpg"
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 d-none d-lg-block">
                              <div className="card">
                                <img
                                  src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 d-none d-lg-block">
                              <div className="card">
                                <img
                                  src="https://mdbootstrap.com/img/new/standard/nature/183.jpg"
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Inner */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else if (currentSelection === "cutoff") {
      return (
        <>
          <div className="container">
            <p>{details.cutoff}</p>
          </div>
        </>
      );
    } else if (currentSelection === "placement") {
      return (
        <>
          <div className="container">
            <p>{details.placements}</p>
          </div>
        </>
      );
    } else if (currentSelection === "gallary") {
      return (
        <>
          <div
            className="container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {details.img !== null && details.img !== undefined ? (
              <img src={details.img}></img>
            ) : null}
            {details.img !== null && details.img !== undefined ? (
              <img src={details.logo}></img>
            ) : null}
            {details.img !== null && details.img !== undefined ? (
              <img src={details.banner}></img>
            ) : null}
          </div>
        </>
      );
    } else if (currentSelection === "faculty") {
      return (
        <>
          <div className="container">
            <p>{details.facilities}</p>
          </div>
        </>
      );
    } else if (currentSelection === "hostel") {
      return (
        <>
          <div className="container">
            <p>{details.facilities}</p>
          </div>
        </>
      );
    } else if (currentSelection === "collegepost") {
      return (
        <>
          <div className="container">
            {/* <p>Add post</p>
            Title<input></input>
            Image

            Description<input></input><br></br>
            <button>Submit  </button> */}

            <div class="container">
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <h1>Create post</h1>

                
                    <div class="form-group">
                      <label for="title">
                        Title <span class="require">*</span>
                      </label>
                      <input onChange={(e)=>{this.setState({postTitle:e.target.value})}} type="text" class="form-control" name="title" />
                    </div>

                    <div class="form-group">
                      <label for="description">Description</label>
                      <textarea onChange={(e)=>{this.setState({postDescription:e.target.value})}}
                        rows="5"
                        class="form-control"
                        name="description"
                      ></textarea>
                    </div>

                    <div class="form-group">
                      <StyledDropZone
                        accept="image/*"
                        style={{
                          height: "auto",
                          border: "3px dotted #9e9d9d",
                          marginTop: "35px",
                          borderRadius: "20px",
                          margin: "10px",
                          padding: "2rem 1rem",
                        }}
                        onDrop={(file, text) => {
                          console.log(file);
                          this.uploadImage(file);
                        }}
                      >
                        {this.state.image.length === 0 ? (
                          <>
                            <div className="d-flex flex-column jcc aic">
                              <img
                                src={img_thumb}
                                style={{ width: "100px" }}
                              ></img>
                              <p
                                style={{ fontSize: "20px", marginTop: "1rem" }}
                              >
                                Click to Upload or drop your image
                              </p>
                            </div>
                          </>
                        ) : (
                          <img
                            src={this.state.image}
                            style={{ height: "20em", width: "100%" }}
                          />
                        )}
                      </StyledDropZone>
                    </div>

                    <div class="">
                      <button onClick={()=>{this.createPostForCollege()}} class="btn btn-primary">
                        Create
                      </button>
                      <button class="btn btn-default">Cancel</button>
                    </div>
          
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
  async componentDidMount() {
    var postJson = {
      collegeid: "614f15898769c3a13c32a344",
    };
    var collegePosts = await getCollegePosts(postJson);
    if (collegePosts.status === 200) {
      console.log("College post response", collegePosts);
      this.setState({ collegePosts: collegePosts.data.response });
    }
  }
}
